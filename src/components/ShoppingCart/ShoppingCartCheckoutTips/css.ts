import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  shoppingCartCheckoutTipsSpan: {
    fontSize: '14px',
    opacity: 0.5,
    display: 'block',
    paddingTop: base(1),
  },

  shoppingCartCheckoutTips: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: base(1),
    paddingBottom: base(2),
    gap: base(1),

    [queries.xs]: {
      flexDirection: 'row',
    },
  },

  shoppingCartCheckoutTip: {
    width: '100%',
    border: `0.2px solid ${colors.black}`,
    padding: `${base(1)}`,
    borderRadius: base(1),
    fontWeight: 300,
    cursor: 'pointer',
  },

  shoppingCartCheckoutTipActive: {
    background: colors.primary,
    color: colors.black,
    border: `0.2px solid ${colors.primary}`,
  },

  shoppingCartCheckoutModal: {
    background: colors.white,
    width: '80vw',
    maxWidth: base(50),
    borderRadius: base(2),
    height: '300px',
  },
});

export default useStyles;
