import { createContext, useState } from "react";
// const [time, setTime] = useState({ hours: "", minutes: "", seconds: "" });
// const [isDone, setIsDone] = useState(false);

export default function DateContext({ children }) {

  const DateContext = createContext(null)


  const [dates, setDates] = useState("hwy");

  const handleDate = () => {
    setDates("Heeeeey")
    console.log(dates)
  }

  return (
    <DateContext.Provider value={{dates, setDates, handleDate}}>
      {children}
    </DateContext.Provider>
  )
}