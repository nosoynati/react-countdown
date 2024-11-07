import { useState, useEffect } from "react";
import "./style.scss";
import DoneCount from '../done/DoneCount'

const Countdown = ({targetDay}) => {

  // const targetDay = new Date("2024/11/24");

  const MILISEC = 1000;
  const SECOND = MILISEC;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  const [date, setDate] = useState({ day: "" });
  const [time, setTime] = useState({ hours: "", minutes: "", seconds: "" });
  const [ isDone, setIsDone ] = useState(false)

  useEffect(() => {
    const gatDateCalc = () => {
      const dayToday = new Date();
      const timeDiff = targetDay - dayToday;
      if(timeDiff <= 0) {
        setIsDone(true)
        return
      }

      setDate({
        day: Math.floor(timeDiff / DAY),
      });
      setTime({
        hours: Math.floor((timeDiff % DAY) / HOUR),
        minutes: Math.floor((timeDiff % HOUR) / MINUTE),
        seconds: Math.floor((timeDiff % MINUTE) / SECOND),
      });
    };
    // gatDateCalc();

    const timeInterval = setInterval(() => {
      gatDateCalc()
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [targetDay]);

  if(isDone) {
    <DoneCount />
  }
 
  return (
    <>
      <div className="counter">
        <div className="reloj row">
          <div className="col">
            <p>día</p>
            <h2>{date.day}</h2>
          </div>
          <div className="col">
            <p>hora</p>
            <h2>{time.hours}</h2>
          </div>
          <div className="col">
            <p>minuto</p>
            <h2>{time.minutes}</h2>
          </div>
          <div className="col">
            <p>segundo</p>
            <h2>{time.seconds}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
