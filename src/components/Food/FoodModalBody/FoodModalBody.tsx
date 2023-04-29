import { useEffect } from 'react';

import Image from 'next/image';
import { useRecoilState } from 'recoil';

import { base } from '../../../../css/base';
import Pizza from '../../../assets/pizza_3.png';
import {
  FoodModalAddOnsAtom,
  FoodModalSelectedSizeAtom,
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

  const [selectedSize, setSelectedSize] = useRecoilState(
    FoodModalSelectedSizeAtom,
  );
  const [addOns, setAddOns] = useRecoilState(FoodModalAddOnsAtom);

  useEffect(() => {
    setSelectedSize(data?.foodById?.sizes?.[0]);
  }, [data, setSelectedSize, showModal]);

  useEffect(() => {
    setAddOns(selectedSize?.addOns || data?.foodById?.addOns);
  }, [selectedSize, data, showModal, setAddOns]);

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

        {selectedSize ? (
          <div className={classes.foodModalBodyChildBorder}>
            <FoodModalContentHeader name="Sizes" isRequired={true} />
            {data?.foodById?.sizes?.map((size) => (
              <FoodSize key={size?.id} size={size} />
            ))}
          </div>
        ) : null}

        {addOns &&
          addOns?.map((addOn) => (
            <div key={addOn?.id} className={classes.foodModalBodyChildBorder}>
              <FoodAddOn addOn={addOn} />
            </div>
          ))}
      </div>

      <FoodModalFooter />
    </>
  );
};

export default FoodModalBody;
