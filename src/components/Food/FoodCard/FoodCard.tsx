import { useEffect, useState } from 'react';

import { DateTime } from 'luxon';
import Image from 'next/image';

import colors from '../../../../css/colors';

import useStyles from './css';
import { IFoodCard } from './types';

const FoodCard = ({ food, activeFoodClick, theme }: IFoodCard) => {
  const classes = useStyles({ theme });

  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = DateTime.now();
      const endDate = DateTime.fromISO(food.endDate as string);
      const diff = endDate
        .diff(now, ['days', 'hours', 'minutes', 'seconds'])
        .toObject();

      if (endDate <= now) {
        clearInterval(timer);
        setCountdown('Ended!');
      } else {
        // Dynamically adjust countdown string based on the most significant units
        const parts = [];
        if ((diff.days ?? 0) > 0) parts.push(`${Math.floor(diff.days ?? 0)}d`);
        if ((diff.days ?? 0) > 0 || (diff.hours ?? 0) > 0)
          parts.push(`${Math.floor(diff.hours ?? 0)}h`);
        if (
          (diff.days ?? 0) > 0 ||
          (diff.hours ?? 0) > 0 ||
          (diff.minutes ?? 0) > 0
        )
          parts.push(`${Math.floor(diff.minutes ?? 0)}m`);
        parts.push(`${Math.floor(diff.seconds ?? 0)}s`); // Always show seconds

        // Ensure only the 3 most significant units are shown
        setCountdown(parts.slice(0, 3).join(' '));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [food.startDate]);

  return (
    <button className={classes.foodCard} onClick={() => activeFoodClick(food)}>
      <div className={classes.foodCardImgContainer}>
        {food?.image && (
          <Image
            src={food?.image}
            objectFit="cover"
            fill
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 'auto',
          }}
        >
          <div className={classes.foodCardContentPrice}>
            $
            {food.price
              ? food.price.toFixed(2)
              : food?.sizes?.[0]?.price?.toFixed(2)}
          </div>

          {food.endDate && (
            <div
              style={{
                color: colors.tertiary,
                marginLeft: 'auto',
                fontSize: '14px',
                textAlign: 'right',
              }}
            >
              {countdown}
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default FoodCard;
