import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IFoodModalHeader } from './types';

const FoodModalCloseButton = ({ onClick }: IFoodModalHeader) => {
  const classes = useStyles();

  return (
    <div className={classes.foodModalCloseBtnContainer}>
      <button onClick={onClick} className={classes.foodModalCloseBtn}>
        <SvgIcons name="closeFilledWhite" />
      </button>
    </div>
  );
};

export default FoodModalCloseButton;
