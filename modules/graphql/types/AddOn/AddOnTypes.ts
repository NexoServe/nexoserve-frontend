import { inputObjectType, objectType } from 'nexus';

export const AddOn = objectType({
  name: `AddOn`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.boolean(`isRequired`);
    t.list.field(`foods`, {
      type: 'Food',
    });
    t.list.field(`items`, {
      type: 'Item',
    });
  },
});

export const CreateAddOnInput = inputObjectType({
  name: 'CreateAddOnInput',
  definition(t) {
    t.string('id');
    t.nonNull.string(`name`);
    t.nonNull.boolean('isRequired');
    t.nonNull.list.nonNull.field('items', {
      type: 'CreateItemInput',
    });
  },
});
