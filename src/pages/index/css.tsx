import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import queries from '../../../css/queries';

const useStyles = createUseStyles({
  indexConatiner: {
    display: 'grid',
    gridTemplateColumns: '1fr',

    [queries.m]: {
      gridTemplateColumns: '1fr 1fr',
      gap: base(1),
    },

    [queries.l]: {
      gap: base(2),
    },

    [queries.xl]: {
      gridTemplateColumns: '1.75fr 1fr',
    },

    [queries.xxl]: {
      gap: base(3),
    },
  },

  indexShoppingCartDesktop: {
    display: 'none',

    [queries.m]: {
      display: 'flex',
    },
  },
});

export default useStyles;
