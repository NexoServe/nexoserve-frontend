import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import queries from '../../../css/queries';

const useStyles = createUseStyles({
  checkout: {
    [queries.l]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridAutoRows: 'min-content',
      columnGap: base(2),
    },

    [queries.xl]: {
      columnGap: base(6),
    },

    [queries.xxl]: {
      columnGap: base(10),
    },
  },
});

export default useStyles;
