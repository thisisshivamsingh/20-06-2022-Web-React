import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getValue(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }
  return (
    <div className="App">
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getValue} />
      <button onClick={() => setPrint(true)}>Print Data</button>
    </div>
  );
}
export default App;
