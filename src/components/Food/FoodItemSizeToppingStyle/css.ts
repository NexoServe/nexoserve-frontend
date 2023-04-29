import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';

const useStyles = createUseStyles({
  foodItemToppingStyleSize: {
    display: 'flex',
    alignItems: 'center',
    opacity: 0.4,
  },

  foodItemToppingStyleSizeActive: {
    opacity: 1,
  },

  foodItemToppingStyleSizeLabel: {
    cursor: 'pointer',
  },

  foodItemToppingStyleSizeIcon: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: base(4),
    maxWidth: base(4),

    '& span': {
      marginTop: base(1),
      fontSize: '14px',
    },
  },

  foodItemToppingStyleSizePrice: {
    fontWeight: 600,
  },

  foodItemToppingStyleSizeIconMiddle: {
    alignItems: 'center',
  },

  foodItemToppingStyleSizeIconLast: {
    alignItems: 'flex-end',

    '& svg': {
      transform: 'rotate(180deg)',
    },
  },

  foodItemToppingStyleSizeInput: {
    opacity: 0,
    position: 'absolute',
    width: 0,
    height: 0,
    overflow: 'hidden',
  },
});

export default useStyles;
