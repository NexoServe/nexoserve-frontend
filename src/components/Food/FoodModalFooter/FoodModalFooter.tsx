import Button from '../../Button/Button';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';

const FoodModalFooter = () => {
  const classes = useStyles();

  return (
    <div className={classes.foodModalFooter}>
      <div className={classes.foodModalFooterQuantityContainer}>
        <button type="button">
          <SvgIcons name="minus" />
        </button>
        <input
          className={classes.foodModalFooterQuantity}
          type="number"
          defaultValue={1}
          // {...methods.register('orderItemQuantity')}
          // value={orderItemQuantity}
        />
        <button type="button">
          <SvgIcons name="plus" />
        </button>
      </div>

      <Button title="">Add ($13.95)</Button>
    </div>
  );
};

export default FoodModalFooter;
