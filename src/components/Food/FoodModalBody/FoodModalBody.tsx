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
import { IFoodModalHeader } from './types';

const FoodModalBody = ({ data, showModal, type }: IFoodModalHeader) => {
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
          id: data.foodById.id,
          name: data?.foodById?.name,
          description: data?.foodById?.description,
          price: data?.foodById?.price || data?.foodById?.sizes?.[0]?.price,
          image: data?.foodById?.image,
        },
        selectedSize: data?.foodById?.sizes?.[0],
      });
    } else {
      setFoodModal({
        ...foodModal,
        food: {
          id: data?.foodById?.id,
          name: data?.foodById?.name,
          description: data?.foodById?.description,
          price: data?.foodById?.price,
          image: data?.foodById?.image,
        },
        selectedSize: data?.foodById?.sizes?.find(
          (size) => size?.id === foodModalSelectedSize?.id,
        ),
      });
    }
  }, [data, setFoodModal, showModal, type]);

  useEffect(() => {
    setAddOns(foodModal.selectedSize?.addOns || data?.foodById?.addOns);
  }, [foodModal, data, showModal, setAddOns]);

  return (
    <>
      <div className={classes.foodModalBodyImage}>
        {data?.foodById?.image && (
          <Image
            src={data?.foodById?.image}
            alt={data?.foodById?.name || undefined}
            objectFit="cover"
            loading="eager"
            width={500}
            height={300}
          />
        )}
      </div>
      <div className={classes.foodModalBodyContent}>
        <FoodModalHeader
          name={data?.foodById?.name}
          description={data?.foodById?.description}
        />

        {foodModal.selectedSize ? (
          <div className={classes.foodModalBodyChildBorder}>
            <FoodModalContentHeader name="Sizes" isRequired={true} />
            {data?.foodById?.sizes?.map((size) => (
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
