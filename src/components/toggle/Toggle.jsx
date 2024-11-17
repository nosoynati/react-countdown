import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Toggle = ({children, visibility, setState}) => {

  const handleClick = () => {
    setState(visibility === 'hidden' ? 'visible' : 'hidden')
    console.log(visibility)
  }
  return (
    <>
     <button className='config' onClick={handleClick}>
        <FontAwesomeIcon icon={['fas', 'gear']} />
      </button>
      {
        visibility === 'visible' ? children : null
      }
    </>
  )
}
