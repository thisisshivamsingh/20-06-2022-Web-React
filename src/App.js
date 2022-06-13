import "./App.css";
import "./style.css";
import style from "./custom.module.css";
import React from "react";
function App() {
  return (
    <div className="App">
      <h1 className="primary">Style type 1 in React js</h1>
      <h1 style={{ color: "red", backgroundColor: "black" }}>
        Style type 2 in React js
      </h1>
      <h1 className={style.success}>Style type 3 in React js</h1>
    </div>
  );
}
export default App;
