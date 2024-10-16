import { createUseStyles } from 'react-jss';

import { base } from '../../../css/base';
import queries from '../../../css/queries';

const useStyles = createUseStyles({
  container: {
    padding: base(1),
    paddingBottom: base(10),
    maxWidth: base(160),
    width: '100%',
    margin: '0 auto',

    [queries.l]: {
      padding: base(2),
    },
  },
});

export default useStyles;
