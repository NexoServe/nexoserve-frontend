import { useMemo, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { FoodWithSizesType } from '../../../../generated/graphql';
import { FoodMenuAtom } from '../../../state/FoodModalState';
import FoodCard from '../FoodCard/FoodCard';
import FoodModal from '../FoodModal/FoodModal';

import useStyles from './css';
import { IFoodList } from './types';

const FoodList = ({ theme }: IFoodList) => {
  const menu = useRecoilValue(FoodMenuAtom);

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
