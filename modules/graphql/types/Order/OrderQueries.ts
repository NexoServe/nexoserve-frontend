import { extendType, list, nonNull } from 'nexus';

import { NexusGenInputs } from '../../../../generated/nexus-typegen';
import calculateTotal from '../../../utils/calculateTotal';

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
        const result = await calculateTotal({
          ctx: ctx,
          input: input as NexusGenInputs['ShoppingCartInput'][],
        });

        return result;
      },
    });
  },
});
