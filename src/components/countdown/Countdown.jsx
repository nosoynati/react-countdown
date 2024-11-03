import { useState, useEffect } from "react";
import "./style.scss";

const getHours = () => {
  const getdayframe = (timelimit) => {
    let targetday = new Date(timelimit);
    if (isNaN(targetday.getTime())) {
      return "Error. Format expected YYYY/MM/DD";
    }
    return targetday;
  };

  let hours = new Date().toLocaleTimeString();
  const [a, b, c] = hours.split(":");
  hours = {
    hour: a,
    minute: b,
    seconds: c,
  };

  return { hours, getdayframe };
};

const Countdown = () => {
  // const [hours, setHours] = useState({
  //   hour: "",
  //   minute: "",
  //   seconds: "",
  //});
  const dayToday = new Date();
  const targetDay = getHours().getdayframe("2024/11/24");

  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  // getHours()
  useEffect(() => {
    const timeDiff = targetDay - dayToday;
    console.log(timeDiff, 'timediff')
    setInterval(() => {
      
    }, 1000);
    setDate({
      days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 / 60)),
      seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
    });
    // setInterval(() => {
    //   setHours({
    //     hour: getHours().hours.hour,
    //     minute: getHours().hours.minute,
    //     seconds: getHours().hours.seconds,
    //   });
    // }, 1000);
    setLoading(false);
  }, [loading, date]);

  if (loading) {
    return <p className="loader">Loading...</p>;
  }
  return (
    <>
      {/* <div className="counter">
        {!loading && (
          <>
            <p>{hours.hour}</p>
            <p>{hours.minute}</p>
            <p>{hours.seconds}</p>
          </>
        )}
      </div> */}
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
