import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  shoppingCartCheckoutTipsSpan: {
    fontSize: '14px',
    opacity: 0.5,
    display: 'block',
    paddingTop: base(1),
    color: theme.primary,
  },

  shoppingCartCheckoutTips: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: base(2),
    paddingBottom: base(2),
    gap: base(1),

    [queries.xs]: {
      flexDirection: 'row',
    },
  },

  shoppingCartCheckoutTip: {
    width: '100%',
    border: `0.8px solid ${theme.primary}40`,
    padding: `${base(1)}`,
    borderRadius: base(1),
    fontWeight: 300,
    cursor: 'pointer',
    color: theme.primary,
  },

  shoppingCartCheckoutTipActive: {
    background: theme.accent,
    color: theme.primary,
    border: `0.2px solid ${theme.accent}`,
  },
}));

export default useStyles;
