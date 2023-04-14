import useStyles from './css';
import { IFoodModalHeader } from './types';

const FoodModalHeader = ({ name, description }: IFoodModalHeader) => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.foodModalHeaderTitle}>{name}</h2>
      <p className={classes.foodModalHeaderDescription}>{description}</p>
    </div>
  );
};

export default FoodModalHeader;
