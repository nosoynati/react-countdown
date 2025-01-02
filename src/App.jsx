import Countdown from "./components/countdown/Countdown";
import Datecontext from "./context/DateContext";
import Header from "./components/header/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(far, fas, fab);

function App() {

  return (
    <div className="main">
      <Datecontext>
        <Header />
        <Countdown evento={'SOAD'} />
      </Datecontext>

      <footer></footer>
    </div>
  );
}

export default App;
