function getHourAndMinute(timeString: string) {
  // Split timeString into parts
  const [time, period] = timeString.split(' ');

  // Get the hour and minute values from the string
  const [hourString, minuteString] = time.split(':');
  let hour = parseInt(hourString, 10);
  const minute = parseInt(minuteString, 10);

  // If it's PM and not 12:00-12:59, add 12 to the hour to convert to 24-hour format
  if (period.toLowerCase() === 'pm' && hour !== 12) {
    hour += 12;
  }

  // If it's AM and hour is 12, set hour to 0 to handle 12 AM correctly
  if (period.toLowerCase() === 'am' && hour === 12) {
    hour = 0;
  }

  return { hour, minute };
}

export default getHourAndMinute;
