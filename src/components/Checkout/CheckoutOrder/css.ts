import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  checkoutOrder: {
    paddingTop: base(2),

    [queries.l]: {
      gridColumn: '2/3',
      gridRow: '1/99',
      paddingTop: 0,
      width: '100%',
      justifySelf: 'end',
    },
  },
});

export default useStyles;
