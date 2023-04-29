import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import queries from '../../../../css/queries';

const useStyles = createUseStyles({
  foodItemToppingStyleDivider: {
    marginLeft: `-${base(1)}`,
    width: base(10),

    [queries.s]: {
      marginLeft: `-${base(2)}`,
    },
  },

  foodItemToppingStyle: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: base(2),
    minHeight: base(10),
    alignItems: 'center',
  },

  foodItemToppingStyleLabel: {
    opacity: 0.7,
    cursor: 'pointer',
    padding: `${base(2)} 0`,
    display: 'flex',
    alignItems: 'center',

    '& p': {
      width: '100%',
      margin: 0,
      paddingLeft: base(1),
    },
  },

  foodItemToppingStyleLabelActive: {
    opacity: 1,
  },

  foodItemToppingStyleInput: {
    opacity: 0,
    position: 'absolute',
    width: 0,
    height: 0,
    overflow: 'hidden',
  },

  foodItemToppingStyleSizes: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default useStyles;
