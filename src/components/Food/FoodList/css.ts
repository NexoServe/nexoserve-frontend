import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  foodList: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    height: 'fit-content',
    width: '100%',
    gap: base(1),

    [queries.l]: {
      gap: base(2),
    },

    [queries.xl]: {
      gridTemplateColumns: '1fr 1fr',
    },

    [queries.xxl]: {
      gap: base(3),
    },
  },
});

export default useStyles;
