import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  orderNavbarTop: {
    height: base(6),
    display: 'flex',
    alignItems: 'center',

    [queries.xs]: {
      height: base(8),
    },
  },
});

export default useStyles;
