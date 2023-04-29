import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  foodModalBodyImage: {
    minWidth: '100%',
    maxHeight: base(40),
    pointerEvents: 'none',
  },

  foodModalBodyContent: {
    padding: `0 ${base(1)}`,

    [queries.s]: {
      padding: `0 ${base(2)}`,
    },
  },

  foodModalBodyChildBorder: {
    border: `1px solid rgba(0, 0, 0, 0.1)`,
    padding: base(1.5),
    borderRadius: base(1),
    marginBottom: base(2),

    [queries.s]: {
      padding: base(2),
    },
  },

  foodModalBodyChildBorderRequired: {
    boxShadow: 'red 0px 0px 20px -12px',
    background: 'red',
    display: 'none',
  },
});

export default useStyles;
