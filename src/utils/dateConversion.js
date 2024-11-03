export const dateConversion = (x) => {
  const MILISEC = 1000;
  const MM = 60;
  const SS = 60;
  const DD = 24;
  const DAYCALC = MILISEC * MM * SS * DD;
  const HOURCALC = MILISEC * MM * SS;

  const dayconvert = Math.floor(x / (DAYCALC)) 
  const hoursconvert = Math.floor((x % DAYCALC) / HOURCALC)
  const minutesconvert = Math.floor((x % HOURCALC) / (MILISEC * MM))
  const secondsconvert = Math.floor( (x % MILISEC * MM) / MILISEC );

  return { dayconvert, hoursconvert, minutesconvert, secondsconvert }
}