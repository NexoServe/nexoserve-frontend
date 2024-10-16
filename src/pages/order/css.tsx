import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import queries from '../../../css/queries';

const useStyles = createUseStyles({
  indexContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    position: 'relative',
    marginBottom: `-${base(8)}`,

    [queries.m]: {
      gap: base(1),
    },

    [queries.l]: {
      gridTemplateColumns: '1fr 1fr',
      gap: base(2),
      marginBottom: `0`,
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

    [queries.l]: {
      display: 'flex',
    },
  },
});

export default useStyles;
