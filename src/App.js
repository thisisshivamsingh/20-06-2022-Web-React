import "./App.css";
import React, { useState } from "react";
function App() {
  const [val, setVal] = useState("000");
  const [item, setItem] = useState("");
  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <input
        type="text"
        value={val}
        // defaultValue="000"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <input
        type="text"
        defaultValue="000"
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />

      <h3>Value:{val}</h3>
      <h3>Item:{item}</h3>
    </div>
  );
}

export default App;
