import Countdown from "./components/countdown/Countdown"
import Header from "./components/header/Header"

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
