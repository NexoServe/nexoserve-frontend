import { createUseStyles } from 'react-jss';

import { base } from '../../../../css/base';
import colors from '../../../../css/colors';

const useStyles = createUseStyles({
  foodModalFooter: {
    position: 'sticky',
    bottom: 0,
    height: base(7),
    width: '100%',
    background: colors.white,
    zIndex: 2,
    padding: base(1),
    display: 'grid',
    gridTemplateColumns: '0.75fr 1.25fr',
    columnGap: base(1),
  },

  foodModalFooterQuantityContainer: {
    display: 'grid',
    gridTemplateColumns: '0.75fr 1.5fr 0.75fr',
    backgroundColor: colors.secondary,
    borderRadius: base(5),
    padding: `0 ${base(1)}`,
    columnGap: base(1),
  },

  foodModalFooterQuantity: {
    width: '100%',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 600,
    background: 'transparent',
    border: 'none',
    outline: 'none',

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      margin: 0,
    },
    '&[type=number]': {
      '-webkit-appearance': 'textfield',
      '-moz-appearance': 'textfield',
    },
  },
});

export default useStyles;
