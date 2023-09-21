import { useEffect } from 'react';

import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  FoodModalAddOnRequiredAtom,
  FoodModalAddOnsAtom,
  FoodModalAtom,
  FoodModalSelectedSizeAtom,
} from '../../../state/FoodModalState';
import FoodAddOn from '../FoodAddOn/FoodAddOn';
import FoodModalContentHeader from '../FoodModalContentHeader/FoodModalContentHeader';
import FoodModalFooter from '../FoodModalFooter/FoodModalFooter';
import FoodModalHeader from '../FoodModalHeader/FoodModalHeader';
import FoodSize from '../FoodSize/FoodSize';

import useStyles from './css';
import { IFoodModalBody } from './types';

const FoodModalBody = ({ food, showModal, type }: IFoodModalBody) => {
  const classes = useStyles();

  const [foodModal, setFoodModal] = useRecoilState(FoodModalAtom);
  const foodModalSelectedSize = useRecoilValue(FoodModalSelectedSizeAtom);
  const [addOns, setAddOns] = useRecoilState(FoodModalAddOnsAtom);
  const requiredAddOn = useRecoilValue(FoodModalAddOnRequiredAtom);

  useEffect(() => {
    if (type === 'create') {
      setFoodModal({
        ...foodModal,
        food: {
          id: food.id,
          name: food.name,
          description: food?.description,
          price: food?.price || food?.sizes?.[0]?.price,
          image: food?.image,
        },
        selectedSize: food?.sizes?.[0],
      });
    } else {
      setFoodModal({
        ...foodModal,
        food: {
          id: food.id,
          name: food.name,
          description: food?.description,
          price: food?.price,
          image: food?.image,
        },
        selectedSize: food?.sizes?.find(
          (size) => size?.id === foodModalSelectedSize?.id,
        ),
      });
    }
  }, [food, setFoodModal, showModal, type]);

  useEffect(() => {
    setAddOns(foodModal.selectedSize?.addOns || food?.addOns);
  }, [foodModal, food, showModal, setAddOns]);

  return (
    <>
      <div className={classes.foodModalBodyImage}>
        {food.image && (
          <Image
            src={food.image}
            alt={food.name || undefined}
            objectFit="cover"
            loading="eager"
            width={500}
            height={300}
          />
        )}
      </div>
      <div className={classes.foodModalBodyContent}>
        <FoodModalHeader name={food?.name} description={food?.description} />

        {foodModal.selectedSize ? (
          <div className={classes.foodModalBodyChildBorder}>
            <FoodModalContentHeader name="Sizes" isRequired={true} />
            {food.sizes?.map((size) => (
              <FoodSize key={size?.id} size={size} />
            ))}
          </div>
        ) : null}

        {addOns &&
          addOns?.map((addOn) => (
            <div
              style={{
                boxShadow:
                  addOn?.name === requiredAddOn?.name
                    ? 'red 0px 0px 20px -16px'
                    : '',
              }}
              key={addOn?.id}
              className={classes.foodModalBodyChildBorder}
            >
              <FoodAddOn
                isRequiredAddOn={addOn?.name === requiredAddOn?.name}
                addOn={addOn}
              />
            </div>
          ))}
      </div>

      <FoodModalFooter type={type} />
    </>
  );
};

export default FoodModalBody;
