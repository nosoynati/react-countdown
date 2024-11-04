import { useState, useEffect } from "react";
// import { dateConversion } from "../../utils/dateConversion";
import { getDate } from "../../utils/getDatae";
import * as consts from './constants'
import "./style.scss";



const Countdown = () => {
  const {DD, DAYCALC, MILISEC, MM, SS, HOURCALC, HH } = consts
  const dayToday = new Date();
  const targetDay = getDate("2024/11/24");
  const timeDiff = targetDay - dayToday;
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState({});

  const [time, setTime] = useState({});

  // const dateconvert = dateConversion();
  useEffect(() => {
    setDate({
      day: Math.floor(timeDiff / DAYCALC),
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setTime({
        hours: Math.floor((timeDiff % DAYCALC) / HOURCALC),
        minutes: Math.floor((timeDiff % HOURCALC) / (MILISEC * MM)),
        seconds: Math.floor((timeDiff % MILISEC * MM) / MILISEC)
      });
    }, 1000);

    setLoading(false);
  }, [time]);

  // console.log(timeDiff)
  if (loading) {
    return <p className="loader">Loading...</p>;
  }
  return (
    <>
      <div className="counter">
        {!loading ? (
          <div className="reloj">
          {date && (
            <h3>{date.day}</h3>
          )
          }
            {time && (
              <>
                
                <h3>{time.hours}</h3>
                <h3>{time.minutes}</h3>
                <h3>{time.seconds}</h3>
              </>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Countdown;
