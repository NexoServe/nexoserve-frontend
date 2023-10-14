import { DateTime } from 'luxon';

import { DayOutput } from '../../../../generated/graphql';

const daysOfWeek = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

export const getNextOpeningDay = (
  currentDay: string,
  openingHours: DayOutput[],
) => {
  const currentDayIndex = daysOfWeek.indexOf(currentDay);

  for (let i = 1; i <= 7; i++) {
    const nextDayIndex = (currentDayIndex + i) % 7;
    const nextDay = daysOfWeek[nextDayIndex];
    const nextDayHours = openingHours.find((day) => day.dayOfWeek === nextDay);

    if ((nextDayHours as DayOutput).time.length > 0) {
      return nextDayHours;
    }
  }

  return null; // No opening day found in the next 7 days
};

export const getNextDateFromDayOfWeek = (
  currentDate: DateTime,
  desiredDayOfWeek: string,
): DateTime => {
  const currentDayIndex = currentDate.weekday;
  const desiredDayIndex =
    daysOfWeek.indexOf(desiredDayOfWeek.toLowerCase()) + 1;

  const diff = desiredDayIndex - currentDayIndex;
  const daysToAdd = diff <= 0 ? diff + 7 : diff;

  return currentDate?.plus({ days: daysToAdd });
};

export const getRestaurantOpeningHours = (openingHours: DayOutput[]) => {
  return openingHours?.map((item, index, arr) => {
    let closingTime;

    if (
      item.time[0].opens_at === '00:00' &&
      item.time[index + 1]?.opens_at === null
    ) {
      return {
        dayOfWeek: item.dayOfWeek,
        opens_at: null,
        closes_at: null,
      };
    }

    // If 'closes_at' is '23:59', use the 'closes_at' of the next day's first time slot
    if (item.time[item.time.length - 1]?.closes_at === '23:59') {
      const nextDayIndex = (index + 1) % arr.length;
      closingTime = arr[nextDayIndex].time[0].closes_at;
    } else {
      // If 'closes_at' is not '23:59', use the 'closes_at' of the current day's last time slot
      closingTime = item.time[item.time.length - 1]?.closes_at;
    }

    // Check if there's a another 'opens_at', otherwise use the first
    const openingTime =
      item.time[item.time.length - 1]?.opens_at ?? item.time[0]?.opens_at;

    return {
      dayOfWeek: item.dayOfWeek,
      opens_at: openingTime,
      closes_at: closingTime,
    };
  });
};
