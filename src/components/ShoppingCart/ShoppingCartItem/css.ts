import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  shoppingCartItem: {
    display: 'grid',
    gridTemplateColumns: `${base(3)} 1fr ${base(3)}`,
    columnGap: base(3),
    padding: `${base(2)} 0`,
    maxWidth: '100%',
  },

  shoppingCartItemQuantity: {
    width: base(3),
    height: base(3),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `${base(0.1)} solid ${colors.black}`,
    borderRadius: '50%',
  },
});

export default useStyles;
