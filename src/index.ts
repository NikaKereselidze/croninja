type Offsets = {
  second: number;
  minute: number;
  hour: number;
  day: number;
  month: number;
};

const dayOfWeekArray: string[] = [
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
  "sun",
];

function validateDayOfWeek(dayOfWeek: string): void {
  if (!dayOfWeekArray.includes(dayOfWeek.toLowerCase())) {
    throw new Error("Invalid day of week");
  }
}

function calculateDate(offsets: Offsets): string {
  let date = new Date();
  date.setSeconds(date.getSeconds() + offsets.second);
  date.setMinutes(date.getMinutes() + offsets.minute);
  date.setHours(date.getHours() + offsets.hour);
  date.setDate(date.getDate() + offsets.day);
  date.setMonth(date.getMonth() + offsets.month);

  return date.toISOString().replace(/T/, " ").replace(/\..+/, "");
}

type DateTime = {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
};

function parseDateTime(dateStr: string): DateTime {
  let [date, time] = dateStr.split(" ");
  let [year, month, day] = date.split("-");
  let [hour, minute, second] = time.split(":");

  return { year, month, day, hour, minute, second };
}

function generateCron(dateTime: DateTime, dayOfWeek: string): string {
  const hourOffset = 4;
  const cron = `${dateTime.second} ${dateTime.minute} ${String(
    parseInt(dateTime.hour) + hourOffset
  )} ${dateTime.day} ${dateTime.month} ${dayOfWeek}`;

  return cron;
}

function Croninja(dayOfWeek: string, offsets: Offsets): string {
  validateDayOfWeek(dayOfWeek);
  const dateStr = calculateDate(offsets);
  const dateTime = parseDateTime(dateStr);
  const cron = generateCron(dateTime, dayOfWeek);

  return cron;
}

export { Croninja };
