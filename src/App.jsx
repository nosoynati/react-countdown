import Countdown from "./components/countdown/Countdown"

function App() {
const dtaae = new Date("2024/12/24")
  return (
    <div className="main">
    <h1>Countdown!</h1>
    <Countdown targetDay={dtaae} evento={'Navidad'}/>
    </div>
  )
}

export default App
