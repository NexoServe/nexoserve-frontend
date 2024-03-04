import { useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import { FoodWithSizesType } from '../../../../generated/graphql';
import { FoodMenuAtom } from '../../../state/FoodModalState';
import FoodCard from '../FoodCard/FoodCard';
import FoodModal from '../FoodModal/FoodModal';

import useStyles from './css';
import { IFoodList } from './types';

const FoodList = ({ theme }: IFoodList) => {
  const menu = useRecoilValue(FoodMenuAtom);
  const router = useRouter(); // Use useRouter to access the query
  const { id: foodId } = router.query; // Destructure to get 'id' parameter

  const sortedMenu = useMemo(() => {
    if (menu.length > 0) {
      return [...menu].sort(
        (a, b) => (a?.sort as number) - (b?.sort as number),
      );
    }
  }, [menu]);

  const styles = useStyles({
    theme,
  });

  const [showModal, setShowModal] = useState(false);
  const [activeFood, setActiveFood] = useState<FoodWithSizesType>();

  useEffect(() => {
    if (foodId && typeof foodId === 'string') {
      let foundFood: FoodWithSizesType | undefined;
      for (const category of menu) {
        foundFood = category?.foods?.find((food) => food.id === foodId);
        if (foundFood) break;
      }

      if (foundFood) {
        setActiveFood(foundFood);
        setShowModal(true);
      }
    }
  }, [foodId, menu]);

  const activeFoodClick = (food: FoodWithSizesType) => {
    setShowModal(true);
    setActiveFood(food);
  };

  return (
    <div>
      {sortedMenu?.map((foodByCategory) => (
        <div key={foodByCategory?.category} className={styles.foodList}>
          <h2 className={styles.foodListCategory}>
            {foodByCategory?.category}
          </h2>
          <div className={styles.foodListInner}>
            {foodByCategory?.foods?.map((food) => (
              <FoodCard
                key={food?.id}
                food={food}
                activeFoodClick={activeFoodClick}
                theme={theme}
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
          theme={theme}
        />
      )}
    </div>
  );
};

export default FoodList;
