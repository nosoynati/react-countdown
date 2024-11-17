import { useEffect, useState } from 'react'

const Setevent = () => {

  const formdata = []
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
    console.log('////',formdata)
  }

  
  return (
    <div className='formdate'>
      <form onSubmit={handleDate} >
        <label htmlFor='name'>Nombre del evento
          <input name='name' type='text' onChange={handleChange} value={dateevent.name} />
        </label>
        <label htmlFor='date'>Fecha
          <input name='date' type='date' onChange={handleChange} value={dateevent.date} />
        </label>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Setevent