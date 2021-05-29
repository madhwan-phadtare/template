import { useState } from "react";
import "./App.css";
import Toggle from "./Components/Toggle/Toggle";

function App() {

  const[toggle, setToggle] = useState(false);
  const handelClick = () => {
    setToggle((s) => !s)
  }

  return (
    <div className="App">
      <header>
        <Toggle toggled={toggle} onClick={handelClick}/>
      </header>
    </div>
  );
}

export default App;
