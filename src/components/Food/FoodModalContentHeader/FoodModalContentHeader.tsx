import useStyles from './css';
import { IFoodModalContentHeader } from './types';

const FoodModalContentHeader = ({
  name,
  isRequired,
}: IFoodModalContentHeader) => {
  const classes = useStyles();

  return (
    <div className={classes.foodModalContentHeader}>
      <h3>{name}</h3>
      <span>{isRequired ? 'Required' : 'Optional'}</span>
    </div>
  );
};

export default FoodModalContentHeader;
