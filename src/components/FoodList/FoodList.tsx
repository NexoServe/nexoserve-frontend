import React, { useState } from 'react';

import FoodCard from '../FoodCard/FoodCard';
import FoodModal from '../FoodModal/FoodModal';
import { Modal } from '../Modal/Modal';
import { FoodType, IFoodList } from './types';
// import useStyles from './css';

const FoodList = ({ foods }: IFoodList) => {
  //   const classes = useStyles();

  const [showModal, setShowModal] = useState(false);
  const [activeFood, setActiveFood] = useState<FoodType>(null);

  const activeFoodClick = (food: FoodType) => {
    setActiveFood(food);
    setShowModal(true);
  };

  // const openModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  return (
    <>
      {foods?.map((food) => (
        <FoodCard
          key={food?.id}
          food={food}
          activeFoodClick={activeFoodClick}
        />
      ))}

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <FoodModal food={activeFood} />
      </Modal>
    </>
  );
};

export default FoodList;
