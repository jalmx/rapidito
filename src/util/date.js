import moment from "moment";

const date = new Date();

export const buildDate = (date) =>
  moment(
    `${date ? date.month : ""}-${date ? date.day : ""}-${
      date ? date.year : ""
    }`,
    "MM-DD-YYYY"
  ).fromNow();

export const getDate = () => ({
  day: date.getDate(),
  month: date.getMonth(),
  year: date.getFullYear(),
  hour: date.getHours(),
  minutes: date.getMinutes(),
});
