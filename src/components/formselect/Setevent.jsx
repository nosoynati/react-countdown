import { useState } from 'react';
import './Setevent.scss';
import { Toggle } from '../toggle/Toggle';

const Setevent = () => {

  const formdata = []
  const [ isHidden, setIsHidden] = useState(true)

  const [dateevent, setDateevent] = useState({
    name: "",
    date: ""
  });

  const handleChange = (e) => {
    e.preventDefault()
    setDateevent({
      ...dateevent,
      [e.target.name]: e.target.value
    })
  }

  const handleDate = (e) => {
    e.preventDefault()
    formdata.push(dateevent)
    console.log(formdata)
  }
  // const styles = {
  //   padding: "10px",
  //   visibility: `${visibility}`
  // }
  return (
    <div className='formdate'>

      <Toggle isHidden={isHidden} setState={setIsHidden}>
        <form onSubmit={handleDate} className={`formcontent ${isHidden}`}>
          <label htmlFor='name'>Nombre del evento
            <input name='name' type='text' id='name' onChange={handleChange} value={dateevent.name} className='input'/>
          </label>
          <label htmlFor='date'>Fecha
            <input name='date' type='date' id='date' onChange={handleChange} value={dateevent.date} className='input'/>
          </label>
          <button type='submit' className='send'>Send</button>
        </form>

      </Toggle>


    </div>
  )
}

export default Setevent