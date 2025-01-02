import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.scss'

const Modal = ({children, actionClose }) => {
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
        <div className='modal--header'>
          <button onClick={actionClose}><FontAwesomeIcon icon={['fas', 'times']} /></button>
        </div>
          {children}
        </div>

      </div>
    </div>
  )
}
export default Modal