import "./App.css";
import { useState, useEffect } from "react";
import Landing from "./Landing.jsx";
import Header from "./Header.jsx";

function App() {
  const [window, setWindow] = useState("landing");
  const [backendData, setBackendData] = useState([{}]);
  const [saveInput, setSaveInput] = useState("");

  function handeSaveInput(input) {
    setSaveInput(input);
  }

  //this is to get data
  useEffect(() => {
    fetch("http://localhost:7001/users")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        console.log(data);
      });
  }, []);

  //

  function toggle() {
    if (window === "landing") {
      setWindow("header");
    }
    if (window === "header") {
      setWindow("landing");
    }
  }

  if (window === "landing") {
    return (
      //render the landing component
      <div className="app">
        <Landing toggle={toggle} onSaveInput={handeSaveInput} />
      </div>
    );
  } else {
    return (
      // render the header component
      <div className="app">
        <Header toggle={toggle} saveInput={saveInput} />
      </div>
    );
  }
}

export default App;

//how to i give App info to the data base so that i can use
// props to drill down.
//maybe i don't i can maybe use state to rememebr the user's name when
//they input their name in the input bar

// onClick = save new variable(in nextWindow) display nextwindow with <div>{next window}</div>

//my logic makes senes until i start trying it and then the logic falls apart
