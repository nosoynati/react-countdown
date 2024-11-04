import { useState, useEffect } from "react";
import { getDate } from "../../utils/getDatae";

import "./style.scss";

const Countdown = () => {

  const targetDay = new Date("2024/11/24");

  const MILISEC = 1000;
  const SECOND = MILISEC;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState({ day: "" });
  const [time, setTime] = useState({ hours: "", minutes: "", seconds: "" });

  // const dateconvert = dateConversion()
  useEffect(() => {
    const gatDateCalc = () => {
      const dayToday = new Date();
      const timeDiff = targetDay - dayToday;

      setDate({
        day: Math.floor(timeDiff / DAY),
      });
      setTime({
        hours: Math.floor((timeDiff % DAY) / HOUR),
        minutes: Math.floor((timeDiff % HOUR) / MINUTE),
        seconds: Math.floor((timeDiff % MINUTE) / SECOND),
      });
    };
    setLoading(false)
    // gatDateCalc();

    const timeInterval = setInterval(() => {
      gatDateCalc()
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [targetDay]);

  if (loading) {
    return <p className="loader">Loading...</p>;
  }
  return (
    <>
      <div className="counter">
        <div className="reloj">
          <>
            <h2>{date.day}</h2>
            <h3>{time.hours}</h3>
            <h3>{time.minutes}</h3>
            <h3>{time.seconds}</h3>
          </>
        </div>
      </div>
    </>
  );
};

export default Countdown;
