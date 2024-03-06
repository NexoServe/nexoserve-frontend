import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  shoppingCartModalButtonBox: {
    position: 'relative',
    bottom: 0,
    left: 0,
    width: '100%',
    minHeight: base(8),
    padding: base(1),
    borderBottomLeftRadius: base(2),
    borderBottomRightRadius: base(2),

    [queries.l]: {
      background: 'transparent',
    },

    '& button': {
      cursor: 'pointer',
    },
  },
});

export default useStyles;
