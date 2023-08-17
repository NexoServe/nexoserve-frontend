import { OpeningHour } from '@prisma/client';

import { DayOutput } from '../../generated/graphql';

const getOpeningHoursByDay = (openingHours: OpeningHour[]): DayOutput[] => {
  const daysOfWeek = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  const openingHoursByDay = daysOfWeek.map((day) => ({
    dayOfWeek: day,
    time: openingHours
      .filter((hours) => hours.dayOfWeek === day)
      .map((hours) => ({
        opens_at: hours.openTime,
        closes_at: hours.closeTime,
      })),
  }));

  return openingHoursByDay;
};

export default getOpeningHoursByDay;
