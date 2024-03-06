import useStyles from './css';
import { IFoodModalHeader } from './types';

const FoodModalHeader = ({ name, description, theme }: IFoodModalHeader) => {
  const classes = useStyles({
    theme,
  });

  return (
    <div>
      <h2 id="foodModalName" className={classes.foodModalHeaderTitle}>
        {name}
      </h2>
      <p className={classes.foodModalHeaderDescription}>{description}</p>
    </div>
  );
};

export default FoodModalHeader;
