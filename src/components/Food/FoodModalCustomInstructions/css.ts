import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  foodModalBodyChildBorder: {
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    padding: base(1.5),
    borderRadius: base(1),
    marginBottom: base(2),

    [queries.s]: {
      padding: base(2),
    },
  },
});

export default useStyles;
