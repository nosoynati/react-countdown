import { useState, useContext } from 'react';
import './Modal.scss'

const Modal = ({children}) => {
  // const [open, setOpen ] = useState(false)

  // const handleOpen = () => {
  //   setOpen(true)
  // }

  return (
    <div 
    className={`${!open ?  '.hidden' : ''}`} 
    >
      <div className='modal--backdrop'>
        <div className='modal--container'>
          {children}
        </div>

      </div>
    </div>
  )
}
export default Modal