export const getDate = (dayexpected) => {
  let targetday = new Date(dayexpected);
  if (isNaN(targetday.getTime())) {
    return "Error. Format expected YYYY/MM/DD";
  }
  return targetday;
};
