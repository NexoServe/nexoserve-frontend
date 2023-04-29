import FoodItem from '../FoodItem/FoodItem';
import FoodModalContentHeader from '../FoodModalContentHeader/FoodModalContentHeader';

import useStyles from './css';
import { IFoodAddOn } from './types';

const FoodAddOn = ({ addOn }: IFoodAddOn) => {
  const classes = useStyles();

  const type = 'pizzaToppings';

  return (
    <div className={classes.foodAddOn}>
      <FoodModalContentHeader
        name={addOn?.name}
        isRequired={addOn?.isRequired}
      />
      {addOn?.name === 'Toppings' ? (
        <div className={classes.foodAddOnToppingHeader}>
          <div></div>
          <div className={classes.foodAddOnToppingHeaderInner}>
            <div>1st</div>
            <div>whole</div>
            <div>2nd</div>
          </div>
        </div>
      ) : null}

      <div>
        {addOn?.items?.map((item) => (
          <FoodItem key={item?.id} item={item} addOn={addOn} />
        ))}
      </div>
    </div>
  );
};

export default FoodAddOn;
