import moment from "moment-jalaali";

const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
const days = ["یک شنبه", "دو شنبه", "سه شنبه", "چهار شنبه", "پنج شنبه", "جمعه", "شنبه"];
export const createDateFromPersianTimestamp = (timestamp, format = "DD TM YYYY hh:mm", separator = " ") => {
  if (!timestamp) return;
  const formatItems = format.split(separator);
  const year = timestamp.slice(0, 4);
  let month = timestamp.slice(4, 6);
  let day = timestamp.slice(6, 8);
  let weekday = createDateObjectFromPersianTimeStamp(timestamp).getDay();
  const hour = timestamp.slice(8, 10);
  const minute = timestamp.slice(10, 12);
  const second = timestamp.slice(12, 14);
  let result = [];
  formatItems.forEach((item) => {
    let timeItems = item.split(":");
    let resultTime = [];
    switch (item) {
      case "DD":
        result.push(day);
        break;
      case "TD":
        result.push(days[weekday]);
        break;
      case "MM":
        result.push(month);
        break;
      case "TM":
        result.push(months[month - 1]);
        break;
      case "YYYY":
        result.push(year);
        break;
      case "hh:mm:ss":
      case "hh:mm":
        timeItems.forEach((timeItem) => {
          switch (timeItem) {
            case "hh":
              resultTime.push(hour);
              break;
            case "mm":
              resultTime.push(minute);
              break;
            case "ss":
              resultTime.push(second);
              break;
            default:
              break;
          }
        });
        result.push(resultTime.join(":"));
        break;
    }
  });
  return result.join(separator);
};

export const createDateObjectFromPersianTimeStamp = (timestamp) => {
  const year = timestamp.slice(0, 4);
  const month = timestamp.slice(4, 6);
  const day = timestamp.slice(6, 8);
  return createDateObj(`${year}/${month}/${day}`);
};

export const createDateObj = (Jdate) => {
  let m = moment(Jdate, "jYYYY/jM/jD");
  let d = m.format("YYYY/M/D");
  return new Date(d);
};

export default {
  createDateFromPersianTimestamp,
  createDateObjectFromPersianTimeStamp,
  createDateObj,
};
