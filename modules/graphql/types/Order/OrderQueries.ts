import { extendType, nonNull } from 'nexus';

import { CheckoutCalculateInput } from './OrderTypes';

export const CheckoutCalculate = extendType({
  type: `Query`,
  definition(t) {
    t.nonNull.field(`checkoutCalculate`, {
      type: 'Checkout',
      args: {
        input: nonNull(CheckoutCalculateInput),
      },
      async resolve(_parent, args, ctx) {
        return {};
      },
    });
  },
});
