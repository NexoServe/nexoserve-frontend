import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  checkoutContact: {
    padding: `0 ${base(2)}`,
    marginTop: base(2),
    paddingBottom: base(1),

    [queries.l]: {
      gridColumn: '1/2',
      height: 'auto',
    },

    [queries.xl]: {
      marginTop: base(4),
    },
  },
});

export default useStyles;
