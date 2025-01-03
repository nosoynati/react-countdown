/* eslint-disable no-unused-vars */
import { useState } from "react";
import { DateContext} from './Context'
// import {formatter} from '../utils/formatter';

const DateContextProvider = ({children}) => {

  let defaultDate = new Date("03-05-2025").toLocaleDateString('es-AR')

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