import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
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

    [queries.m]: {
      width: '100vw',
      maxWidth: base(50),
      height: '80vh',
      bottom: 'unset',
      position: 'relative',
      borderRadius: base(2),
    },
  },
});

export default useStyles;
