import { useState, useEffect } from "react";
import { dateConversion } from "../../utils/dateConversion";
import { getDate } from "../../utils/getDatae";
import "./style.scss";

const Countdown = () => {
  const dayToday = new Date();
  const targetDay = getHours().getdayframe("2024/11/24");

  const {dayconvert,} = dateConversion()
  const timeDiff = targetDay - dayToday;
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState({});

  useEffect(() => {
    

    setInterval(() => {
      setDate({
        asd: dayconvert(timeDiff),
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
      });
    }, 1000);

    setLoading(false);
  }, [loading, date]);

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
              <>
              <h1>{date.asd}</h1>
                <h3>{date.days}</h3>
                <h3>{date.hours}</h3>
                <h3>{date.minutes}</h3>
                <h3>{date.seconds}</h3>
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
