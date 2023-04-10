import Image from 'next/image';

import { base } from '../../../../css/base';
import Pizza from '../../../assets/pizza.png';

import useStyles from './css';
import { IFoodCard } from './types';

const FoodCard = ({ food, activeFoodClick }: IFoodCard) => {
  const classes = useStyles();

  return (
    <button className={classes.foodCard} onClick={() => activeFoodClick(food)}>
      <div className={classes.foodCardImgContainer}>
        <Image
          src={Pizza}
          width={base(14)}
          height={base(14)}
          layout="fill"
          objectFit="cover"
          alt="pizza"
          placeholder="blur"
          className={classes.foodCardImg}
        />
      </div>
      <div className={classes.foodCardContent}>
        <h3 className={classes.foodCardContentName}>{food?.name}</h3>
        <p className={classes.foodCardContentDescription}>
          {food?.description}
        </p>
        <div className={classes.foodCardContentPrice}>${food.price}</div>
      </div>
    </button>
  );
};

export default FoodCard;
