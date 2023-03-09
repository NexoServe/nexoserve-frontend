import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  foodModalQuantity: {
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
