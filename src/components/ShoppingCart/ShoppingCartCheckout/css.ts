import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  shoppingCartCheckoutLinkBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  shoppingCartCheckoutLink: {
    textAlign: 'center',
    fontSize: '18px',
    padding: `${base(3)} 0`,
    fontWeight: 500,
  },

  shoppingCartCheckout: {
    padding: base(2),
  },

  shoppingCartCheckoutInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  shoppingCartCheckoutLabel: {
    margin: 0,
    fontSize: '16px',
  },

  shoppingCartCheckoutTotalLabel: {
    fontWeight: 500,
  },

  shoppingCartCheckoutTotalDiv: {
    fontWeight: 500,
  },
});

export default useStyles;
