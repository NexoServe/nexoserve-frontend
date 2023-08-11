import { OpeningHour } from '@prisma/client';
import { DateTime } from 'luxon';

import { DayOutput } from '../../generated/graphql';
import getOpeningHoursByDay from '../../src/utils/getOpeningHoursByDay';

import isStoreOpen from './isStoreOpen';

interface IIsTimeValid {
  isOrderTimeValid: boolean;
  currentDateTime: string;
  timezone: string;
  isOpenNow: boolean;
  openingHoursByDay: DayOutput[];
}

const validateTime = (
  openingHours: OpeningHour[],
  dateTime: DateTime | string | null | undefined,
  timezone: string,
): IIsTimeValid => {
  const openingHoursByDay = getOpeningHoursByDay(openingHours);

  const nowUTC = DateTime.utc();
  const timeZonedTime = nowUTC.setZone(timezone);

  const isOpenNow = isStoreOpen(openingHoursByDay, timeZonedTime, timezone);

  if (dateTime === 'ASAP') {
    if (isOpenNow) {
      return {
        isOrderTimeValid: true,
        currentDateTime: timeZonedTime.toString(),
        timezone: timezone,
        isOpenNow,
        openingHoursByDay,
      };
    } else {
      return {
        isOrderTimeValid: false,
        currentDateTime: timeZonedTime.toString(),
        timezone: timezone,
        isOpenNow,
        openingHoursByDay,
      };
    }
  }

  const orderDateTime = DateTime.fromISO(dateTime as string);
  const orderDateTimeZoned = orderDateTime.setZone(timezone);

  // Check if selected time is at least 15 min after current time
  const differenceInMinutes = orderDateTimeZoned.diff(
    timeZonedTime,
    'minutes',
  ).minutes;

  if (differenceInMinutes < 15) {
    return {
      isOrderTimeValid: false,
      currentDateTime: timeZonedTime.toString(),
      timezone: timezone,
      isOpenNow,
      openingHoursByDay,
    };
  }

  if (orderDateTimeZoned < timeZonedTime) {
    return {
      isOrderTimeValid: false,
      currentDateTime: timeZonedTime.toString(),
      timezone: timezone,
      isOpenNow,
      openingHoursByDay,
    };
  }

  const isStoreOpenOnOrderDateTime = isStoreOpen(
    openingHoursByDay,
    orderDateTimeZoned,
    timezone,
  );

  if (!isStoreOpenOnOrderDateTime) {
    return {
      isOrderTimeValid: false,
      currentDateTime: timeZonedTime.toString(),
      timezone: timezone,
      isOpenNow,
      openingHoursByDay,
    };
  }

  return {
    isOrderTimeValid: true,
    currentDateTime: timeZonedTime.toString(),
    timezone: timezone,
    isOpenNow,
    openingHoursByDay,
  };
};

export default validateTime;