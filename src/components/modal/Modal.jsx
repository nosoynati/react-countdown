import { useState, useContext } from 'react';
import './Modal.scss'

const Modal = () => {
  return (
    <div className='modal--backdrop'>
      <div className='modal--container'>
        <p>Modal</p>
      </div>

    </div>
  )
}
export default Modal