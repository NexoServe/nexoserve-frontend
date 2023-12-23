import { useMemo, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { FoodWithSizesType } from '../../../../generated/graphql';
import { FoodMenuAtom } from '../../../state/FoodModalState';
import FoodCard from '../FoodCard/FoodCard';
import FoodModal from '../FoodModal/FoodModal';

import useStyles from './css';

const FoodList = () => {
  const menu = useRecoilValue(FoodMenuAtom);

  const sortedMenu = useMemo(() => {
    if (menu.length > 0) {
      return [...menu].sort(
        (a, b) => (a?.sort as number) - (b?.sort as number),
      );
    }
  }, [menu]);

  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);
  const [activeFood, setActiveFood] = useState<FoodWithSizesType>();

  const activeFoodClick = (food: FoodWithSizesType) => {
    setShowModal(true);
    setActiveFood(food);
  };

  return (
    <div>
      {sortedMenu?.map((foodByCategory) => (
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
      {activeFood && (
        <FoodModal
          showModal={showModal}
          setShowModal={setShowModal}
          foodId={activeFood.id}
          type="create"
        />
      )}
    </div>
  );
};

export default FoodList;
