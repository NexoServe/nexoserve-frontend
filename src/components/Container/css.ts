import { tss } from 'tss-react';

import { base } from '../../../css/base';
import queries from '../../../css/queries';

const useStyles = tss.create({
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
