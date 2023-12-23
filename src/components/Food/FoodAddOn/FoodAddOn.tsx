import { useMemo, useRef } from 'react';

import { OptionType } from '../../../../generated/graphql';
import FoodModalContentHeader from '../FoodModalContentHeader/FoodModalContentHeader';
import FoodOption from '../FoodOption/FoodOption';

import useStyles from './css';
import { IFoodAddOn } from './types';

const FoodAddOn = ({ addOn, isRequiredAddOn }: IFoodAddOn) => {
  const classes = useStyles();

  const ref = useRef<HTMLDivElement>(null);

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
        maxOptionsSelected={addOn?.maxOptionsSelected}
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
        {addOn?.options
          ?.slice()
          ?.sort((a, b) => (a?.sort as number) - (b?.sort as number))
          ?.map((option) => (
            <FoodOption
              key={option?.id}
              option={option as OptionType}
              addOn={addOn}
            />
          ))}
      </div>
    </div>
  );
};

export default FoodAddOn;
