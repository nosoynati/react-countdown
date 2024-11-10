export const formatter = (val) => {
  return val.toLocaleString("es-AR", {
    minimumIntegerDigits: 2,
  });

};