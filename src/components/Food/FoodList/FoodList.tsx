import { useState } from 'react';

import { useFoodsByCategoryQuery } from '../../../../generated/graphql';
import FoodCard from '../FoodCard/FoodCard';
import FoodModal from '../FoodModal/FoodModal';

import useStyles from './css';
import { SimpleFoodType } from './types';

const FoodList = () => {
  const { data } = useFoodsByCategoryQuery({
    notifyOnNetworkStatusChange: true,
  });

  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);
  const [activeFood, setActiveFood] = useState<SimpleFoodType | null>(null);

  const activeFoodClick = (food: SimpleFoodType) => {
    setActiveFood(food);
    setShowModal(true);
  };

  return (
    <div>
      {data?.foodsByCategory?.map((foodByCategory) => (
        <div key={foodByCategory?.category} className={classes.foodList}>
          <h2 className={classes.foodListCategory}>
            {foodByCategory?.category}
          </h2>
          <div className={classes.foodListInner}>
            {foodByCategory?.foods?.map((food) => (
              <FoodCard
                key={food?.id}
                food={food}
                activeFoodClick={activeFoodClick}
              />
            ))}
          </div>
        </div>
      ))}

      <FoodModal
        showModal={showModal}
        setShowModal={setShowModal}
        foodId={activeFood?.id as string}
      />
    </div>
  );
};

export default FoodList;
