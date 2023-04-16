import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  shoppingCartModalButtonBox: {
    background: colors.white,
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
  },
});

export default useStyles;
