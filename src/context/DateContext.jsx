import { createContext, useState } from "react";
// import {formatter} from '../utils/formatter';

export const DateContext = createContext(null)

const DateContextProvider = ({children}) => {

  let defaultDate = new Date("12-24-2024")

  const [ dateevent, setDateevent ] = useState({name: "", date: ""})

  let targetDay = dateevent?.date || defaultDate
  const [formdata, setFormdata ] = useState(null);

  // const handleChange = (e) => {
  //   e.preventDefault()
  //   setDateevent({
  //     ...dateevent,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // const handleDate = (e) => {
  //   e.preventDefault()
  //   formdata.push()
  //   console.log(formdata)
  // }

  return (
    <DateContext.Provider value={{ dateevent, setDateevent, formdata, setFormdata, targetDay}}>
      {children}
    </DateContext.Provider>
  )
}
export default DateContextProvider;