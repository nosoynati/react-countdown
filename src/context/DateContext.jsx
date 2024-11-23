import { createContext, useState } from "react";
import formatter from '../utils/formatter';
import * as TIMES from '../utils/constants'

const DateContext = createContext(null)

export default function DateContextProvider({children}) {

  const { DAY, MINUTE, SECOND, HOUR } = TIMES
  const [time, setTime] = useState({ day: "", hours: "", minutes: "", seconds: "" });
  const [ targetday, setTargetday ] = useState({name: "", dateexpected: ""})
  const formdata = [];


  const handleDate = (e) => {
    e.preventDefault()
    formdata.push()
    console.log(formdata)
  }

  const dayToday = new Date();
  const timeDiff = targetday.dateexpected - dayToday;

  setTime({
    day: Math.floor(timeDiff / DAY),
    hours: formatter(Math.floor((timeDiff % DAY) / HOUR)),
    minutes: formatter(Math.floor((timeDiff % HOUR) / MINUTE)),
    seconds: formatter(Math.floor((timeDiff % MINUTE) / SECOND)),
  });

  return (
    <DateContext.Provider value={{ time, setTime, dayToday, timeDiff, targetday, setTargetday, formdata,}}>
      {children}
    </DateContext.Provider>
  )
}