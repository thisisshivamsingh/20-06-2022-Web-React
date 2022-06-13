import "./App.css";
import React, { useState } from "react";
function App() {
  const [data, setData] = useState("Shivam");
  return (
    <div className="App">
      <h1>{data}</h1>
      <button
        onClick={() => {
          setData("Singh");
        }}
      >
        Update Data
      </button>
    </div>
  );
}
export default App;
