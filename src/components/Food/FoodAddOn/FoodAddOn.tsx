import FoodItem from '../FoodItem/FoodItem';

import useStyles from './css';
import { IFoodAddOn } from './types';

const FoodAddOn = ({ addOn, setSelectedItems, selectedItems }: IFoodAddOn) => {
  const classes = useStyles();

  return (
    <div className={classes.foodAddOn}>
      <div className={classes.foodAddOnInner}>
        <h4>{addOn?.name}</h4>
        <p>{addOn?.isRequired ? 'Is Required' : 'Not Required'}</p>
      </div>
      <ul>
        {addOn?.items?.map((item) => (
          <FoodItem
            key={item?.id}
            item={item}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodAddOn;