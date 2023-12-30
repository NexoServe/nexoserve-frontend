import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IFoodModalHeader } from './types';

const FoodModalCloseButton = ({ onClick, theme }: IFoodModalHeader) => {
  const classes = useStyles();

  return (
    <div className={classes.foodModalCloseBtnContainer}>
      <button onClick={onClick} className={classes.foodModalCloseBtn}>
        <SvgIcons
          name="closeFilledWhite"
          width="40px"
          height="40px"
          fill={theme.primary}
          backgroundColor={theme.neutral}
        />
      </button>
    </div>
  );
};

export default FoodModalCloseButton;
