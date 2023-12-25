import Image from 'next/image';

import useStyles from './css';
import { IFoodCard } from './types';

const FoodCard = ({ food, activeFoodClick }: IFoodCard) => {
  const classes = useStyles();

  return (
    <button className={classes.foodCard} onClick={() => activeFoodClick(food)}>
      <div className={classes.foodCardImgContainer}>
        {food?.image && (
          <Image
            src={food?.image}
            fill
            objectFit="cover"
            alt={food?.name as string}
            className={classes.foodCardImg}
          />
        )}
      </div>
      <div className={classes.foodCardContent}>
        <h3 className={classes.foodCardContentName}>{food?.name}</h3>
        <p className={classes.foodCardContentDescription}>
          {food?.description}
        </p>
        <div className={classes.foodCardContentPrice}>
          $
          {food.price
            ? food.price.toFixed(2)
            : food?.sizes?.[0]?.price?.toFixed(2)}
        </div>
      </div>
    </button>
  );
};

export default FoodCard;
