import { DateTime } from 'luxon';

export const roundToNearest = (dateTime: DateTime, minutesArray: number[]) => {
  const currentMinutes = dateTime.minute;
  let closest = minutesArray[0];
  let difference = Math.abs(currentMinutes - closest);

  for (let i = 1; i < minutesArray.length; i++) {
    const newDifference = Math.abs(currentMinutes - minutesArray[i]);
    if (newDifference < difference) {
      difference = newDifference;
      closest = minutesArray[i];
    }
  }

  return dateTime.set({ minute: closest, second: 0, millisecond: 0 });
};
