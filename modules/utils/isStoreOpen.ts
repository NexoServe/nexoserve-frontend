import { DateTime, Interval } from 'luxon';

import { NexusGenObjects } from '../../generated/nexus-typegen';

function isStoreOpen(
  hours: NexusGenObjects['DayOutput'][],
  time: DateTime,
  timezone: string,
): boolean {
  const currentDay = time?.weekdayLong?.toLowerCase();
  const currentDayHours = hours.find((h) => h.dayOfWeek === currentDay);

  if (!currentDayHours) {
    return false;
  }

  const currentTimeOfDay = time.toFormat('HH:mm');
  const currentDateTime = DateTime.fromFormat(currentTimeOfDay, 'HH:mm', {
    zone: timezone,
  });

  for (const time of currentDayHours.time) {
    const opens = DateTime.fromFormat(time?.opens_at as string, 'HH:mm', {
      zone: timezone,
    });

    let closes = DateTime.fromFormat(time?.closes_at as string, 'HH:mm', {
      zone: timezone,
    });

    if (closes < opens) {
      closes = closes.plus({ day: 1 });
    }

    const interval = Interval.fromDateTimes(opens, closes.plus({ minute: 1 }));

    if (interval.contains(currentDateTime)) {
      return true;
    }
  }

  return false;
}

export default isStoreOpen;
