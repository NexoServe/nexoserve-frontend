import { useEffect } from 'react';

import Image from 'next/image';
import { useRecoilState } from 'recoil';

import { base } from '../../../../css/base';
import Pizza from '../../../assets/pizza_3.png';
import {
  FoodModalAddOnRequiredAtom,
  FoodModalAddOnsAtom,
  FoodModalAtom,
} from '../../../state/FoodModalState';
import FoodAddOn from '../FoodAddOn/FoodAddOn';
import FoodModalContentHeader from '../FoodModalContentHeader/FoodModalContentHeader';
import FoodModalFooter from '../FoodModalFooter/FoodModalFooter';
import FoodModalHeader from '../FoodModalHeader/FoodModalHeader';
import FoodSize from '../FoodSize/FoodSize';

import useStyles from './css';
import { IFoodModalHeader } from './types';

const FoodModalBody = ({ data, showModal }: IFoodModalHeader) => {
  const classes = useStyles();

  const [foodModal, setFoodModal] = useRecoilState(FoodModalAtom);
  const [addOns, setAddOns] = useRecoilState(FoodModalAddOnsAtom);
  const [requiredAddOn, setRequiredAddOn] = useRecoilState(
    FoodModalAddOnRequiredAtom,
  );

  useEffect(() => {
    setFoodModal({
      ...foodModal,
      food: {
        name: data?.foodById?.name,
        description: data?.foodById?.description,
        price: data?.foodById?.price || data?.foodById?.sizes?.[0]?.price,
        image: data?.foodById?.image,
      },
      selectedSize: data?.foodById?.sizes?.[0],
    });
  }, [data, setFoodModal, showModal]);

  useEffect(() => {
    setAddOns(foodModal.selectedSize?.addOns || data?.foodById?.addOns);
  }, [foodModal, data, showModal, setAddOns]);

  return (
    <>
      <div className={classes.foodModalBodyImage}>
        <Image
          src={Pizza}
          layout="responsive"
          objectFit="cover"
          style={{
            minWidth: '100%',
            maxHeight: base(40),
          }}
          alt="hey"
          quality={100}
        />
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

      <FoodModalFooter />
    </>
  );
};

export default FoodModalBody;
