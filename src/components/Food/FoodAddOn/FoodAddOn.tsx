import { useMemo, useRef } from 'react';

import { useFormContext } from 'react-hook-form';

import FoodItem from '../FoodItem/FoodItem';
import { FoodFormType } from '../FoodModal/types';
import FoodModalContentHeader from '../FoodModalContentHeader/FoodModalContentHeader';

import useStyles from './css';
import { IFoodAddOn } from './types';

const FoodAddOn = ({ addOn, isRequiredAddOn }: IFoodAddOn) => {
  const classes = useStyles();

  const ref = useRef<HTMLDivElement>(null);

  const {
    formState: { errors },
  } = useFormContext<FoodFormType>();

  useMemo(() => {
    if (isRequiredAddOn) {
      ref?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }, [isRequiredAddOn]);

  return (
    <div className={classes.foodAddOn}>
      <div ref={ref} style={{ position: 'absolute', top: '-100px' }}></div>
      <FoodModalContentHeader
        name={addOn?.name}
        isRequired={addOn?.isRequired}
        isRequiredAddOn={isRequiredAddOn}
      />
      {addOn?.name === 'Toppings' ? (
        <div className={classes.foodAddOnToppingHeader}>
          <div></div>
          <div className={classes.foodAddOnToppingHeaderInner}>
            <div>1st</div>
            <div>whole</div>
            <div className={classes.foodAddOnToppingHeaderInnerLast}>2nd</div>
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
