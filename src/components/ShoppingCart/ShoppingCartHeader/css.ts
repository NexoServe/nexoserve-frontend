import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  shoppingCartHeader: {
    width: '100%',
    height: base(6),
    padding: base(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: colors.white,
    borderTopLeftRadius: base(2),
    borderTopRightRadius: base(2),
    position: 'relative',

    [queries.l]: {
      background: colors.secondary,
    },
  },

  shoppingCartHeaderTitle: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '500',
  },

  shoppingCartHeaderCloseButton: {
    padding: base(1),
    display: 'block',
    cursor: 'pointer',

    [queries.l]: {
      display: 'none',
    },
  },

  shoppingCartHeaderShowDetails: {
    display: 'none',
    padding: 0,

    [queries.l]: {
      display: 'flex',
    },
  },
});

export default useStyles;
