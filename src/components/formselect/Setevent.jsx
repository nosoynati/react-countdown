import { useState } from 'react';
import './Setevent.scss';
import { Toggle } from '../toggle/Toggle';

const Setevent = () => {

  const formdata = []
  const [visibility, setVisibility] = useState('hidden')
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
  const styles = {
    visibility: `${visibility}`
  }
  return (
    <div className='formdate'>

      <Toggle visibility={visibility} setState={setVisibility}>
        <form onSubmit={handleDate} style={styles}>
          <label htmlFor='name'>Nombre del evento
            <input name='name' type='text' id='name' onChange={handleChange} value={dateevent.name} />
          </label>
          <label htmlFor='date'>Fecha
            <input name='date' type='date' id='date' onChange={handleChange} value={dateevent.date} />
          </label>
          <button type='submit'>Send</button>
        </form>

      </Toggle>


    </div>
  )
}

export default Setevent