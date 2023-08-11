import { OpeningHour } from '@prisma/client';
import { DateTime } from 'luxon';

import getOpeningHoursByDay from '../../src/utils/getOpeningHoursByDay';

import isStoreOpen from './isStoreOpen';

interface IIsTimeValid {
  isOrderTimeValid: boolean;
  currentDateTime: string;
  timezone: string;
}

const isTimeValid = (
  openingHours: OpeningHour[],
  dateTime: DateTime | string | null | undefined,
  timezone: string,
): IIsTimeValid => {
  const openingHoursByDay = getOpeningHoursByDay(openingHours);

  const nowUTC = DateTime.utc();
  const timeZonedTime = nowUTC.setZone(timezone);
  // const timeZonedTime = DateTime.fromISO(
  //   '2023-08-11T09:00:15.381-04:00',
  // ).setZone(timezone);

  if (dateTime === 'ASAP') {
    if (isStoreOpen(openingHoursByDay, timeZonedTime, timezone) === true) {
      return {
        isOrderTimeValid: true,
        currentDateTime: timeZonedTime.toString(),
        timezone: timezone,
      };
    } else {
      return {
        isOrderTimeValid: false,
        currentDateTime: timeZonedTime.toString(),
        timezone: timezone,
      };
    }
  }

  const datetime = DateTime.fromISO(dateTime as string);
  const datetimeInRestaurantTimezone = datetime.setZone(timezone);

  // Check if selected time is at least 15 min after current time
  const differenceInMinutes = datetimeInRestaurantTimezone.diff(
    timeZonedTime,
    'minutes',
  ).minutes;

  if (differenceInMinutes < 15) {
    return {
      isOrderTimeValid: false,
      currentDateTime: timeZonedTime.toString(),
      timezone: timezone,
    };
  }

  if (datetimeInRestaurantTimezone < timeZonedTime) {
    return {
      isOrderTimeValid: false,
      currentDateTime: timeZonedTime.toString(),
      timezone: timezone,
    };
  }

  const isOpen = isStoreOpen(
    openingHoursByDay,
    datetimeInRestaurantTimezone,
    timezone,
  );

  if (!isOpen) {
    return {
      isOrderTimeValid: false,
      currentDateTime: timeZonedTime.toString(),
      timezone: timezone,
    };
  }

  return {
    isOrderTimeValid: true,
    currentDateTime: timeZonedTime.toString(),
    timezone: timezone,
  };
};

export default isTimeValid;
