import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  shoppingCartModalButtonBox: {
    background: colors.white,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: base(8),
    padding: base(1),
  },

  hey: {
    background: 'red',
  },
});

export default useStyles;
