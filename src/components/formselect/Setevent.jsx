import { useContext, useState } from 'react';
import './Setevent.scss';
import { Toggle } from '../toggle/Toggle';
import { DateContext } from '../../context/DateContext';

const Setevent = () => {

  const [ isHidden, setIsHidden] = useState(true)

  const {dateevent,  setDateevent, formdata, setFormdata } = useContext(DateContext)

  const handleChange = (e) => {
    e.preventDefault()
    setDateevent({
      ...dateevent,
      [e.target.name]: e.target.value
    })
  }
  const handleDate = (e) => {
    e.preventDefault()
    setFormdata(dateevent)
    setIsHidden(!isHidden)
    console.log(formdata)
  }

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