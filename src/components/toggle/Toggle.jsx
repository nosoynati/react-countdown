import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Toggle = ({children, isHidden, setState}) => {

  const handleClick = () => {
    setState(!isHidden)

  }
  return (
    <>
     <button className='config' onClick={handleClick}>
        <FontAwesomeIcon icon={['fas', 'gear']} inverse />
      </button>
      {
        !isHidden && children
      }
    </>
  )
}
