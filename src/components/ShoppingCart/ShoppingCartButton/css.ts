import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  shoppingCartButtonBox: {
    background: colors.white,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: base(8),
    padding: base(1),
  },

  shoppingCartButton: {
    background: colors.primary,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    outline: 0,
    border: 0,
    borderRadius: base(5),
    fontSize: '16px',
    fontWeight: '500',
  },
});

export default useStyles;
