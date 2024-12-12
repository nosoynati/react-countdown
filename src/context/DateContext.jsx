/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
// import formatter from '../utils/formatter';
// import * as TIMES from '../utils/constants'

export const DateContext = createContext(null)

const DateContextProvider = ({children}) => {

  
  // const { DAY, MINUTE, SECOND, HOUR } = TIMES
  // const [time, setTime] = useState({ day: "", hours: "", minutes: "", seconds: "" });

  const [ targetday, setTargetday ] = useState({name: "", dateexpected: ""})
  const formdata = [];

  const dayToday = new Date();
  const timeDiff = targetday.dateexpected - dayToday;

  const handleDate = (e) => {
    e.preventDefault()
    formdata.push()
    console.log(formdata)
  }
  // setTime({
  //   day: Math.floor(timeDiff / DAY),
  //   hours: formatter(Math.floor((timeDiff % DAY) / HOUR)),
  //   minutes: formatter(Math.floor((timeDiff % HOUR) / MINUTE)),
  //   seconds: formatter(Math.floor((timeDiff % MINUTE) / SECOND)),
  // });

  return (
    <DateContext.Provider value={{ dayToday, timeDiff, handleDate, targetday, setTargetday, formdata,}}>
      {children}
    </DateContext.Provider>
  )
}
export default DateContextProvider