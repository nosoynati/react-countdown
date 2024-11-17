import Countdown from "./components/countdown/Countdown";
import Header from "./components/header/Header";
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(far,fas,fab);

function App() {

const dtaae = new Date("2024/12/24")

  return (
    <div className="main">
    <Header />
    <Countdown targetDay={dtaae} evento={'Navidad'}/>
    <footer></footer>
    </div>
  )
}

export default App
