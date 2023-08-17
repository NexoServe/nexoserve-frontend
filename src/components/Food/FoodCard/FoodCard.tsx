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
            layout="fill"
            objectFit="cover"
            alt={food?.name || undefined}
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
          ${food.price ? food.price : food?.sizes?.[0]?.price}
        </div>
      </div>
    </button>
  );
};

export default FoodCard;
