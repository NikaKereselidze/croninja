"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Croninja = void 0;
const dayOfWeekArray = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun",
];
function validateDayOfWeek(dayOfWeek) {
    if (!dayOfWeekArray.includes(dayOfWeek.toLowerCase())) {
        throw new Error("Invalid day of week");
    }
}
function calculateDate(offsets) {
    let date = new Date();
    date.setSeconds(date.getSeconds() + offsets.second);
    date.setMinutes(date.getMinutes() + offsets.minute);
    date.setHours(date.getHours() + offsets.hour);
    date.setDate(date.getDate() + offsets.day);
    date.setMonth(date.getMonth() + offsets.month);
    return date.toISOString().replace(/T/, " ").replace(/\..+/, "");
}
function parseDateTime(dateStr) {
    let [date, time] = dateStr.split(" ");
    let [year, month, day] = date.split("-");
    let [hour, minute, second] = time.split(":");
    return { year, month, day, hour, minute, second };
}
function generateCron(dateTime, dayOfWeek) {
    const hourOffset = 4;
    if (parseInt(dateTime.hour) + hourOffset > 24) {
        dateTime.hour = String(parseInt(dateTime.hour) + hourOffset - 24);
    }
    const cron = `${dateTime.second} ${dateTime.minute} ${dateTime.hour} ${dateTime.day} ${dateTime.month} ${dayOfWeek}`;
    return cron;
}
function Croninja(offsets, dayOfWeek) {
    if (dayOfWeek) {
        validateDayOfWeek(dayOfWeek);
    }
    const dateStr = calculateDate(offsets || {
        second: 0,
        minute: 0,
        hour: 0,
        day: 0,
        month: 0,
    });
    const dateTime = parseDateTime(dateStr);
    const cron = generateCron(dateTime, dayOfWeek || "*");
    return cron;
}
exports.Croninja = Croninja;
//# sourceMappingURL=index.js.map