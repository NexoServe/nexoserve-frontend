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
    height: 'auto',
  },

  shoppingCartInner: {
    [queries.l]: {
      maxHeight: '70vh',
      height: '70vh',
      position: 'sticky',
      top: base(3),
    },
  },

  shoppingCartInnerCheckout: {
    [queries.l]: {
      maxHeight: '100%',
      height: '100%',
      position: 'relative',
      top: base(0),
    },
  },
});

export default useStyles;
