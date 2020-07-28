const date = new Date();

export const getDate = () => ({
  day: date.getDate(),
  month: date.getMonth(),
  year: date.getFullYear(),
  hour: date.getHours(),
  minutes: date.getMinutes(),
});
