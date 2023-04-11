import { useState } from 'react';

import { useFoodsByCategoryQuery } from '../../../../generated/graphql';
import { ModalPopUp } from '../../Modal/Modal';
import FoodCard from '../FoodCard/FoodCard';
import FoodModal from '../FoodModal/FoodModal';

import useStyles from './css';
import { FoodType, IFoodList } from './types';

const FoodList = ({ foods }: IFoodList) => {
  const { data } = useFoodsByCategoryQuery({
    notifyOnNetworkStatusChange: true,
  });

  console.log('data', data);

  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);
  const [activeFood, setActiveFood] = useState<FoodType | null>(null);

  const activeFoodClick = (food: FoodType) => {
    setActiveFood(food);
    setShowModal(true);
  };

  // const openModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  return (
    <div>
      {data?.foodsByCategory?.map((foodByCategory) => (
        <div key={foodByCategory?.category} className={classes.foodList}>
          <h2 className={classes.foodListCategory}>
            {foodByCategory?.category}
          </h2>
          <div className={classes.foodListInner}>
            {foodByCategory?.foods?.map((food, i) => (
              <FoodCard
                key={food?.id}
                food={food}
                activeFoodClick={activeFoodClick}
              />
            ))}
          </div>
        </div>
      ))}

      <ModalPopUp showModal={showModal} setShowModal={setShowModal}>
        <FoodModal food={activeFood} />
      </ModalPopUp>
    </div>
  );
};

export default FoodList;
