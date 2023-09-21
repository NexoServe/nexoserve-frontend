import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

import { FoodWithSizesType } from '../../../../generated/graphql';
import { FoodMenuAtom } from '../../../state/FoodModalState';
import FoodCard from '../FoodCard/FoodCard';
import FoodModal from '../FoodModal/FoodModal';

import useStyles from './css';

const FoodList = () => {
  const menu = useRecoilValue(FoodMenuAtom);

  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);
  const [activeFood, setActiveFood] = useState<FoodWithSizesType>();

  console.log('showModal', showModal);
  console.log('activeFood', activeFood);

  const activeFoodClick = (food: FoodWithSizesType) => {
    setShowModal(true);
    setActiveFood(food);
  };

  return (
    <div>
      {menu.map((foodByCategory) => (
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

      <AnimatePresence>
        {showModal && activeFood && (
          <FoodModal
            showModal={showModal}
            setShowModal={setShowModal}
            foodId={activeFood.id}
            type="create"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FoodList;
