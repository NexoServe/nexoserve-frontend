import { NexusGenInputs, NexusGenObjects } from '../../generated/nexus-typegen';
import { Context } from '../../types/Context';

interface ICalculateTotal {
  input: NonNullable<NexusGenInputs['ShoppingCartInput'][]>;
  ctx: Context;
}

const calculateTotal = async ({ input, ctx }: ICalculateTotal) => {
  const taxRate = 0.08;

  const foodIds = input.map((item) => item?.foodId);
  const foodSizesIds =
    input
      .filter((item) => {
        if (item?.foodSizeId !== undefined) {
          return item?.foodSizeId;
        }
      })
      .map((item) => item?.foodSizeId) || [];
  const itemIds = input.flatMap((item) => item?.items?.map((i) => i?.itemId));

  let foodSizes: NexusGenObjects['FoodSize'][] = [];

  if (foodSizesIds) {
    foodSizes = await ctx.prisma.foodSize.findMany({
      where: {
        id: { in: foodSizesIds as string[] },
      },
    });
  }

  const [foods, items] = await Promise.all([
    ctx.prisma.food.findMany({
      where: {
        id: { in: foodIds as string[] },
      },
    }),
    ctx.prisma.item.findMany({
      where: {
        id: { in: itemIds as string[] },
      },
      include: {
        itemSizes: true,
      },
    }),
  ]);

  let subTotal = 0;

  const result: (NexusGenObjects['ShoppingCartItem'] | undefined)[] = input.map(
    (shoppingCartItem) => {
      const food = foods.find((f) => f.id === shoppingCartItem?.foodId);
      const foodSize = foodSizes.find(
        (fs) => fs.id === shoppingCartItem?.foodSizeId,
      );

      if (!food) {
        return undefined;
      }

      const itemPrices =
        shoppingCartItem?.items?.map((item) => {
          const itemPrice = items.find(
            (i) => i.id === (item?.itemId as string),
          );

          return itemPrice?.price ?? 0;
        }) ?? [];

      const itemSizePrices =
        shoppingCartItem?.items?.map((item) => {
          const itemSize = items
            .find((i) => i.id === (item?.itemId as string))
            ?.itemSizes?.find((s) => s.id === (item?.itemSizeId as string));
          return itemSize?.price ?? 0;
        }) ?? [];

      const totalPrice =
        ((food?.price ?? 0) +
          (foodSize?.price ?? 0) +
          itemPrices.reduce((a, b) => a + b, 0) +
          itemSizePrices.reduce((a, b) => a + b, 0)) *
        (shoppingCartItem?.quantity as number);

      subTotal += totalPrice;

      const selectedFood: NexusGenObjects['BaseFood'] = {
        id: food?.id,
        name: food?.name,
        price: food?.price,
      };

      const selectedSize: NexusGenObjects['SimpleFoodSize'] = {
        id: foodSize?.id as string,
        name: foodSize?.name as string,
        price: foodSize?.price as number,
      };

      const shoppingCartItemResult: NexusGenObjects['ShoppingCartItem'] = {
        orderItemId: shoppingCartItem?.orderItemId as string,
        food: selectedFood,
        selectedSize: foodSize ? selectedSize : undefined,
        selectedItems:
          shoppingCartItem?.items?.map((item) => {
            const itemObj = items.find(
              (i) => i.id === (item?.itemId as string),
            );
            const itemSizeObj = itemObj?.itemSizes?.find(
              (s) => s.id === item?.itemSizeId,
            );

            const itemResult: NexusGenObjects['SelectedItem'] = {
              id: item?.itemId as string,
              name: itemObj?.name,
              price: itemObj?.price,
              addOnName: item?.addOnName as string,
              itemSize: itemSizeObj,
            };

            return itemResult;
          }) ?? [],
        price: totalPrice,
        quantity: shoppingCartItem?.quantity as number,
      };

      return shoppingCartItemResult;
    },
  );

  const filteredResult = result.filter(
    (item): item is NexusGenObjects['ShoppingCartItem'] => item !== undefined,
  );

  let tip: number;

  if (input[0]?.isTipPercentage) {
    tip = parseFloat(subTotal.toFixed(2)) * ((input[0].tip as number) / 100);
  } else {
    tip = input[0]?.tip as number;
  }

  return {
    subTotal: parseFloat(subTotal.toFixed(2)),
    tax: parseFloat((subTotal * taxRate).toFixed(2)),
    tip: parseFloat(tip.toFixed(2)) || undefined,
    grandTotal:
      parseFloat(subTotal.toFixed(2)) +
        parseFloat((subTotal * taxRate).toFixed(2)) +
        parseFloat(tip.toFixed(2)) || 0,
    shoppingCartItems: filteredResult,
  };
};

export default calculateTotal;
