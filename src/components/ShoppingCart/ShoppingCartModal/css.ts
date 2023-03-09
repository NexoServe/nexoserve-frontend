import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  shoppingCartModal: {
    width: '100%',
    maxWidth: '400px',
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
