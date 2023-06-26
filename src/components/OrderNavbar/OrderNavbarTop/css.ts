import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  orderNavbarTop: {
    height: base(6),
    display: 'flex',
    alignItems: 'center',

    [queries.s]: {
      height: base(8),
    },
  },
});

export default useStyles;
