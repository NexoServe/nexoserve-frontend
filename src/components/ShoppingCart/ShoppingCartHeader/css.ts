import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  shoppingCartHeader: {
    width: '100%',
    height: base(6),
    padding: base(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: base(2),
    borderTopRightRadius: base(2),
    position: 'relative',
    background: theme.neutral,

    [queries.l]: {},
  },

  shoppingCartHeaderTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '500',
    color: theme.primary,
  },

  shoppingCartHeaderCloseButton: {
    padding: base(1),
    display: 'block',
    cursor: 'pointer',

    [queries.l]: {
      display: 'none',
    },
  },

  shoppingCartHeaderCloseButtonCheckout: {
    display: 'none',
  },

  shoppingCartHeaderShowDetails: {
    display: 'none',
    padding: 0,
    color: theme.primary,

    [queries.l]: {
      display: 'flex',
    },
  },

  shoppingCartHeaderShowDetailsCheckout: {
    display: 'flex',
  },
}));

export default useStyles;
