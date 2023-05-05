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

  shoppingCartInner: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    borderRadius: base(2),

    [queries.l]: {
      maxHeight: '70vh',
      height: '70vh',
      position: 'sticky',
      top: base(3),
    },
  },
});

export default useStyles;
