import { extendType, inputObjectType, nonNull, objectType } from 'nexus';
import { v4 as uuidv4 } from 'uuid';

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
