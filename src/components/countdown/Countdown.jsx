import { useState, useEffect } from "react";
import { dateConversion } from "../../utils/dateConversion";
import "./style.scss";

const getHours = () => {
  const getdayframe = (timelimit) => {
    let targetday = new Date(timelimit);
    if (isNaN(targetday.getTime())) {
      return "Error. Format expected YYYY/MM/DD";
    }
    return targetday;
  };

  return { getdayframe };
};

const Countdown = () => {
  const dayToday = new Date();
  const targetDay = getHours().getdayframe("2024/11/24");

  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState({});

  // getHours()
  useEffect(() => {
    const timeDiff = targetDay - dayToday;

    setInterval(() => {
      setDate({
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
      });
    }, 1000);

    setLoading(false);
  }, []);

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
