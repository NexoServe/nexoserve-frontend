import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  foodList: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: base(2),

    [queries.m]: {
      flexDirection: 'row',
      columnGap: base(1),
    },
  },
});

export default useStyles;
