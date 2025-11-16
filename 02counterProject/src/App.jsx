import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let counter = 5;
  const addvalue = () => {
    console.log("clicked");
    counter = counter + 1;
  };

  return (
    <>
      <h2>Chai aur code</h2>
      <h3>counter:5</h3>

      <button onClick={addvalue}>addvalue</button>
      <br />
      <button>remove value</button>
    </>
  );
}

export default App;
