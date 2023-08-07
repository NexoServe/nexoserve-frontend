import { OpeningHour } from '@prisma/client';
import { DateTime } from 'luxon';

import { ValidateOrderDetailsType } from '../../generated/graphql';
import getOpeningHoursByDay from '../../src/utils/getOpeningHoursByDay';

import isStoreOpen from './isStoreOpen';

const isTimeValid = (
  openingHours: OpeningHour[],
  dateTime: DateTime | string | null | undefined,
  timezone: string,
): ValidateOrderDetailsType => {
  const openingHoursByDay = getOpeningHoursByDay(openingHours);

  const nowUTC = DateTime.utc();
  const timeZonedTime = nowUTC.setZone(timezone);

  if (dateTime === 'ASAP') {
    if (isStoreOpen(openingHoursByDay, timeZonedTime, timezone) === true) {
      return {
        isDateTimeValid: true,
        currentDateTime: timeZonedTime.toString(),
        timezone: timezone,
      };
    } else {
      return {
        isDateTimeValid: false,
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
      isDateTimeValid: false,
      currentDateTime: timeZonedTime.toString(),
      timezone: timezone,
    };
  }

  if (datetimeInRestaurantTimezone < timeZonedTime) {
    return {
      isDateTimeValid: false,
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
      isDateTimeValid: false,
      currentDateTime: timeZonedTime.toString(),
      timezone: timezone,
    };
  }

  return {
    isDateTimeValid: true,
    currentDateTime: timeZonedTime.toString(),
    timezone: timezone,
  };
};

export default isTimeValid;
