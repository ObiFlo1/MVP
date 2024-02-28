import "./App.css";
import { useState, useEffect } from "react";
import Landing from "./Landing.jsx";
import ListHeader from "./ListHeader.jsx";
import List from "./List.jsx";

function App() {
  const [window, setWindow] = useState("landing");
  const [backendData, setBackendData] = useState([{}]);
  const [saveInput, setSaveInput] = useState("");
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  function handleSaveInput(input) {
    setSaveInput(input);
  }
  function toggle() {
    setWindow((prevWindow) =>
      prevWindow === "landing" ? "header" : "landing"
    );
    //Reset List when toggling back to the landing page
    if (window === "header") {
      setItems([]);
    }
  }

  //this is to get data. eventually
  useEffect(() => {
    fetch("http://localhost:7001/users")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        console.log(data);
      });
  }, []);
  useEffect(() => {
    console.log(items);
  }, [items]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() !== "") {
      try {
        const response = await fetch("http://localhost:7001/todos", {
          method: "POST",
          header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item: newItem }), // Sends entered item to the server
        });
        if (!response.ok) {
          throw new Error("Failed to add ittem");
        }
        console.log("Item Added");
        setItems((prevItems) => [...prevItems, newItem]);
        setNewItem("");
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <div className="app">
      {window === "landing" ? (
        <Landing toggle={toggle} onSaveInput={handleSaveInput} />
      ) : (
        <>
          <ListHeader saveInput={saveInput} toggle={toggle} />

          <div className="">
            <form onSubmit={handleSubmit}>
              <input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item..."
              />
              <button className="button" type="submit">
                Save
              </button>
              <button className="button" onClick={toggle}>
                Exit
              </button>
            </form>
          </div>
          <List items={items} />
        </>
      )}
    </div>
  );
}

export default App;

//how to i give App info to the data base so that i can use
// props to drill down.
//maybe i don't i can maybe use state to rememebr the user's name when
//they input their name in the input bar

// onClick = save new variable(in nextWindow) display nextwindow with <div>{next window}</div>

//my logic makes senes until i start trying it and then the logic falls apart

// function toggle() {
//   if (window === "landing") {
//     setWindow("header");
//   }
//   if (window === "header") {
//     setWindow("landing");
//   }
// }

// if (window === "landing") {
//   return (
//     //render the landing component
//     <div className="app">
//       <Landing toggle={toggle} onSaveInput={handeSaveInput} />
//     </div>
//   );
// } else {
//   return (
//     // render the header component
//     <div className="app">
//       <Header toggle={toggle} saveInput={saveInput} items={items} />
//       <List items={items} />
//       <footer className="footer"></footer>
//     </div>
//   );
// }
