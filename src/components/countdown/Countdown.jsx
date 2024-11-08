import { useState, useEffect } from "react";
import "./style.scss";

import DoneCount from '../done/DoneCount'

const Countdown = ({targetDay, evento}) => {

  // const targetDay = new Date("2024/11/24");

  const MILISEC = 1000;
  const SECOND = MILISEC;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  const [date, setDate] = useState({ day: "" });
  const [time, setTime] = useState({ hours: "", minutes: "", seconds: "" });
  const [ isDone, setIsDone ] = useState(false)
  const formatter = (val) => {
    if(val < 10){
      return val.toLocaleString('es-AR', {
      minimumIntegerDigits: 2
    })
    }
    return val
  }
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
        hours: formatter(Math.floor((timeDiff % DAY) / HOUR)),
        minutes: formatter(Math.floor((timeDiff % HOUR) / MINUTE)),
        seconds: formatter(Math.floor((timeDiff % MINUTE) / SECOND)),
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
      <h2>Faltan para {evento}:</h2>
        <div className="reloj row">
          <div className="col">
            <p>{ date.day == 1 ? 'día' : 'días'}</p>
            <h2>{date.day}</h2>
          </div>
          <div className="col">
            <p>{time.hours == 1 ? 'hora' : 'horas'}</p>
            <h2>{time.hours}</h2>
          </div>
          <div className="col">
            <p>{time.minutes == 1 ? 'minuto' : 'minutos'}</p>
            <h2>{time.minutes}</h2>
          </div>
          <div className="col">
            <p>segundos</p>
            <h2>{time.seconds}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
