/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
// import {formatter} from '../utils/formatter';

export const DateContext = createContext(null)

const DateContextProvider = ({children}) => {

  let defaultDate = new Date("12-24-2024")

  const [ dateevent, setDateevent ] = useState({name: "", date: ""})

  let targetDay = dateevent?.date || defaultDate
  const [formdata, setFormdata ] = useState(null);

  return (
    <DateContext.Provider value={{ dateevent, setDateevent, formdata, setFormdata, targetDay}}>
      {children}
    </DateContext.Provider>
  )
}
export default DateContextProvider;