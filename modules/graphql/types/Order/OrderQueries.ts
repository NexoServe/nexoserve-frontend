import { extendType, list, nonNull } from 'nexus';

import { ShoppingCartItem } from '../../../../generated/graphql';

import { ShoppingCartInput } from './OrderTypes';

export const ValidateShoppingCart = extendType({
  type: `Query`,
  definition(t) {
    t.nonNull.field(`validateShoppingCart`, {
      type: 'ShoppingCart',
      args: {
        input: nonNull(list(ShoppingCartInput)),
      },
      async resolve(_parent, { input }, ctx) {
        const foodIds = input.map((item) => item?.foodId);
        const foodSizesIds = input.map((item) => item?.foodSizeId);
        const itemIds = input.flatMap((item) =>
          item?.items?.map((i) => i?.itemId),
        );

        const [foods, foodSizes, items] = await Promise.all([
          ctx.prisma.food.findMany({
            where: {
              id: { in: foodIds as string[] },
            },
          }),
          ctx.prisma.foodSize.findMany({
            where: {
              id: { in: foodSizesIds as string[] },
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

        let grandTotal = 0;

        const result: ShoppingCartItem[] = input.map((shoppingCartItem) => {
          const food = foods.find((f) => f.id === shoppingCartItem?.foodId);
          const foodSize = foodSizes.find(
            (fs) => fs.id === shoppingCartItem?.foodSizeId,
          );
          const itemPrices =
            shoppingCartItem?.items?.map((item) => {
              const itemSize = items
                .find((i) => i.id === (item?.itemId as string))
                ?.itemSizes?.find((s) => s.id === (item?.itemSizeId as string));
              return itemSize?.price ?? 0;
            }) ?? [];
          const totalPrice =
            ((food?.price ?? 0) +
              (foodSize?.price ?? 0) +
              itemPrices.reduce((a, b) => a + b, 0)) *
            (shoppingCartItem?.quantity as number);

          grandTotal += totalPrice;

          return {
            orderItemId: shoppingCartItem?.orderItemId as string,
            food: {
              id: food?.id,
              name: food?.name,
              price: food?.price,
            },
            foodSize: {
              id: foodSize?.id,
              name: foodSize?.name,
              price: foodSize?.price,
            },
            selectedItems:
              shoppingCartItem?.items?.map((item) => {
                const itemObj = items.find(
                  (i) => i.id === (item?.itemId as string),
                );
                const itemSizeObj = itemObj?.itemSizes?.find(
                  (s) => s.id === item?.itemSizeId,
                );
                return {
                  id: item?.itemId as string,
                  name: itemObj?.name,
                  price: itemObj?.price,
                  selectedItemSize: itemSizeObj,
                };
              }) ?? [],
            price: totalPrice,
          };
        });

        return {
          grandTotal: parseFloat(grandTotal.toFixed(2)),
          shoppingCartItems: result,
        };
      },
    });
  },
});
