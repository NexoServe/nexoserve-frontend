import { inputObjectType, objectType } from 'nexus';

export const Food = objectType({
  name: `Food`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.string(`description`);
    t.string(`image`);
    t.list.field('sizes', {
      type: 'FoodSize',
    });
    t.float(`price`);
    t.list.field(`addOns`, {
      type: 'AddOn',
    });
  },
});

export const SimpleFood = objectType({
  name: `SimpleFood`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.string(`description`);
    t.string(`image`);
    t.float(`price`);
  },
});

export const FoodsByCategory = objectType({
  name: `FoodsByCategory`,
  definition(t) {
    t.nonNull.string(`category`);
    t.list.nonNull.field('foods', { type: 'SimpleFood' });
  },
});

export const CreateFoodInput = inputObjectType({
  name: 'CreateFoodInput',
  definition(t) {
    t.string('id');
    t.nonNull.string(`name`);
    t.string('description');
    t.string('image');
    t.nonNull.string('category');
    t.list.nonNull.field('sizes', {
      type: 'CreateFoodSizeInput',
    });
    t.float(`price`);
    t.list.nonNull.field('addOns', {
      type: 'CreateAddOnInput',
    });
  },
});
