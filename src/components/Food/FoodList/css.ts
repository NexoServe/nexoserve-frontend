import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  foodList: {},

  foodListCategory: {
    marginTop: 0,
    fontSize: '35px',
    marginBottom: base(3),
    lineHeight: base(4.5),
    fontWeight: '400',

    [queries.l]: {
      gap: base(2),
    },
  },

  foodListInner: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    height: 'fit-content',
    width: '100%',
    gap: base(1),
    marginBottom: base(5),

    [queries.l]: {
      gap: base(2),
      marginBottom: base(8),
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
