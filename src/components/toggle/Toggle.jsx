import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'


export const Toggle = ({children, isHidden, setState}) => {
  const [iconstyle, setIconstyle] = useState("inverted");
  const handleClick = () => {
    setState(!isHidden)

  }
  const removeInverse = () => {
    setIconstyle(!iconstyle)
  }
  return (
    <>
     <button className='config' onClick={handleClick} onMouseEnter={removeInverse}>
        <FontAwesomeIcon icon={['fas', 'gear']} iconstyle={setIconstyle}/>
      </button>
      {
        !isHidden && children
      }
    </>
  )
}
