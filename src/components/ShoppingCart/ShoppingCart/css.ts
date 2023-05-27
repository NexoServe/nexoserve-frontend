import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  shoppingCart: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  shoppingCartCheckout: {
    minHeight: '100%',
  },

  shoppingCartInner: {
    [queries.l]: {
      maxHeight: '70vh',
      height: '70vh',
      position: 'sticky',
      top: base(3),
    },
  },
});

export default useStyles;
