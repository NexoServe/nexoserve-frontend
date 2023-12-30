import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import { ThemeType } from '../../../../generated/graphql';

const useStyles = createUseStyles((theme: ThemeType) => ({
  foodOptionToppingStyleSize: {
    display: 'flex',
    alignItems: 'center',
    opacity: 0.4,
  },

  foodOptionToppingStyleSizeActive: {
    opacity: 1,
  },

  foodOptionToppingStyleSizeLabel: {
    cursor: 'pointer',
  },

  foodOptionToppingStyleSizeIcon: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: base(4),
    maxWidth: base(4),

    '& span': {
      marginTop: base(1),
      fontSize: '14px',
    },
  },

  foodOptionToppingStyleSizePrice: {
    color: theme.primary,
  },

  foodOptionToppingStyleSizePriceActive: {
    fontWeight: 600,
    color: theme.primary,
  },

  foodOptionToppingStyleSizeIconMiddle: {
    alignItems: 'center',
  },

  foodOptionToppingStyleSizeIconLast: {
    alignItems: 'flex-end',

    '& svg': {
      transform: 'rotate(180deg)',
    },
  },

  foodOptionToppingStyleSizeInput: {
    opacity: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
}));

export default useStyles;
