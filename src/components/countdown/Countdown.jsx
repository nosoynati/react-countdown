import { useState, useEffect, useContext } from "react";
import { DateContext } from "../../context/DateContext";
import { formatter } from '../../utils/formatter'
import * as TIMES from '../../utils/constants'

import "./style.scss";
import Setevent from "../formselect/Setevent";
import DoneCount from "../done/DoneCount";

const Countdown = ({ evento }) => {

  const { DAY, SECOND, HOUR, MINUTE } = TIMES

  const { targetDay, formdata } = useContext(DateContext)

  const [time, setTime] = useState({ day: "", hours: "", minutes: "", seconds: "" });
  const [isDone, setIsDone] = useState(false);

  // const formatter = (val) => {
  //   return val.toLocaleString("es-AR", {
  //     minimumIntegerDigits: 2,
  //   });

  // };
  useEffect(() => {
    const gatDateCalc = () => {
      const dayToday = new Date();
      const timeDiff = new Date(targetDay) - dayToday;

      if (timeDiff <= 0) {
        setIsDone(true);
        return;
      }
      setTime({
        day: Math.ceil(timeDiff / DAY),
        hours: formatter(Math.ceil((timeDiff % DAY) / HOUR)),
        minutes: formatter(Math.ceil((timeDiff % HOUR) / MINUTE)),
        seconds: formatter(Math.ceil((timeDiff % MINUTE) / SECOND)),
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
    <>
      <Setevent />

      <div className="counter">
        <div className="counter--wrapper">
          <h2>Faltan para {formdata ? formdata.name : evento}:</h2>
          <div className="reloj">
            <div className="col">
              <div className="row"><h2>{time.day}</h2><span className="space">:</span></div>
              <p>{time.day == 1 ? "día" : "días"}</p>
            </div>
            <div className="col">
              <div className="row"><h2>{time.hours}</h2><span className="space">{window.innerWidth >= 768 ? ':' : ''}</span></div>
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

      </div>
    </>
  );
};

export default Countdown;
