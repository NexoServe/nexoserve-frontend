import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
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
    color: theme.primary,
  },

  shoppingCartCheckout: {
    padding: base(2),
  },

  shoppingCartCheckoutInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& > div': {
      color: theme.primary,
    },
  },

  shoppingCartCheckoutLabel: {
    margin: 0,
    fontSize: '16px',
    color: theme.primary,
  },

  shoppingCartCheckoutTotalLabel: {
    fontWeight: 500,
  },

  shoppingCartCheckoutTotalDiv: {
    fontWeight: 500,
  },
}));

export default useStyles;
