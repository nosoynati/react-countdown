import { useState } from 'react'

const Setevent = () => {

  const [date, setDate] = useState({
    name: "",
    date: new Date()
  });


  const handleChange = (e) => {
    e.preventDefault()
    setDate({
      [e.target.name]: e.target.value
    })
  }
  const handleDate = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }
  console.log(date)
  return (
    <div className='formdate'>
      <form onSubmit={handleDate} >
        <label htmlFor='name'>Nombre del evento
          <input name='name' type='text' onChange={handleChange} value={date.name} />
        </label>
        <label htmlFor='date'>Fecha
          <input name='date' type='date' onChange={handleChange} value={date.date} />
        </label>
        <input type='submit' value="Set" />
      </form>
    </div>
  )
}

export default Setevent