import React, { useState, useEffect, useMemo, useReducer } from "react";

const getHours = () => {

  const getdayframe = (timelimit) => {
    const [dd, mm, aaaa] = timelimit.split("/");
    const timeframe = {
      dia: dd,
      mes: mm,
      anio: aaaa,
    };
    return timeframe
  };

  let dias = new Date().getDay();
  let hours = new Date().toLocaleTimeString();
  const [a, b, c] = hours.split(":");
  hours = {
    hour: a,
    minute: b,
    seconds: c,
  };
  const days = new Date().toLocaleDateString();

  return { hours, days, dias, getdayframe };
};

const Countdown = () => {
  const [hours, setHours] = useState({
    hour: "",
    minute: "",
    seconds: "",
  });
  const [diasemana, setDiasemana] = useState("");
  const getdaysandhours = getHours().getdayframe("12/11/2025");

  // getHours()
  useEffect(() => {
    
   
    setInterval(() => {
      setHours({
        hour: getHours().hours.hour,
        minute: getHours().hours.minute,
        seconds: getHours().hours.seconds,
      });
    }, 1000);
  }, []);

  return (
    <div>
      <p>{hours.hour}</p>
      <p>{hours.minute}</p>
      <p>{hours.seconds}</p>
    </div>
  );
};

export default Countdown;
