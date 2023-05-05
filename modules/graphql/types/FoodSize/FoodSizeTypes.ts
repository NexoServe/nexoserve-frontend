import { inputObjectType, objectType } from 'nexus';

export const FoodSize = objectType({
  name: `FoodSize`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.float(`price`);
    t.list.field(`addOns`, {
      type: 'AddOn',
    });
  },
});

export const SimpleFoodSize = objectType({
  name: `SimpleFoodSize`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.float(`price`);
  },
});

export const CreateFoodSizeInput = inputObjectType({
  name: 'CreateFoodSizeInput',
  definition(t) {
    t.string('id');
    t.nonNull.string(`name`);
    t.nonNull.float('price');
    t.nonNull.list.nonNull.field('addOns', {
      type: 'CreateAddOnInput',
    });
  },
});
