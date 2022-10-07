import Stripe from 'stripe';

const stripe = new Stripe(
  'sk_test_51LpL70ASAoKDeNPqnBySCRL1fnirggq2OuiRTBMJm1U4vQm54ytKLtMAYlV03CMnbRYdersVGfWZPSJh0ufDProH00TjydLq2z',
  {
    apiVersion: '2022-08-01',
  },
);

export default stripe;
