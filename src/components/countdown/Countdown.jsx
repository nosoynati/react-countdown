/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { DateContext } from "../../context/DateContext";
import {formatter} from '../../utils/formatter'
import "./style.scss";
import Setevent from "../formselect/Setevent";
import DoneCount from "../done/DoneCount";

const Countdown = ({ targetDay, evento }) => {

  const datecontext = useContext(DateContext)
  const { targetday } = datecontext

  const MILISEC = 1000;
  const SECOND = MILISEC;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;

  const [time, setTime] = useState({ hours: "", minutes: "", seconds: "" });
  const [isDone, setIsDone] = useState(false);
  
  useEffect(() => {
    const gatDateCalc = () => {
      const dayToday = new Date();
      const timeDiff = targetDay - dayToday;
      if (timeDiff <= 0) {
        setIsDone(true);
        return;
      }
      setTime({
        day: Math.floor(timeDiff / DAY),
        hours: formatter(Math.floor((timeDiff % DAY) / HOUR)),
        minutes: formatter(Math.floor((timeDiff % HOUR) / MINUTE)),
        seconds: formatter(Math.floor((timeDiff % MINUTE) / SECOND)),
      });
    };

    const timeInterval = setInterval(() => {
      gatDateCalc();
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [targetDay]);

  if (isDone) {
    <DoneCount />;
  }

  return (
    <div className="counter">
    <Setevent />
      <h2>Faltan para {evento}:</h2>
      <div className="reloj">
        <div className="col">
          <div className="row"><h2>{time.day}</h2><span className="space">:</span></div>
          <p>{time.day == 1 ? "día" : "días"}</p>
        </div>
        <div className="col">
          <div className="row"><h2>{time.hours}</h2><span className="space">{ window.innerWidth >= 768 ? ':' : ''}</span></div>
          <p>{time.hours == 1 ? "hora" : "horas"}</p>
        </div>
        <div className="col">
          <div className="row"><h2>{time.minutes}</h2><span className="space">:</span></div>
          <p>{time.minutes == 1 ? "minuto" : "minutos"}</p>
        </div>
        <div className="col">
          <div className="row"><h2>{time.seconds}</h2><span className="space"></span></div>
          <p>segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
