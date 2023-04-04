import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  shoppingCartModalConatiner: {
    display: 'flex',

    [queries.m]: {
      display: 'none',
    },
  },

  shoppingCartModal: {
    width: '100%',
    height: 'calc(100vh - 30px)',
    position: 'fixed',
    bottom: 0,
    left: 0,
    background: colors.secondary,
    borderTopLeftRadius: base(2),
    borderTopRightRadius: base(2),
    display: 'flex',
    justifyContent: 'center',
  },
});

export default useStyles;
