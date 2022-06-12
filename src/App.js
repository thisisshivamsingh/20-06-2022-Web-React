import logo from "./logo.svg";
import "./App.css";
import React from "react";

import User from "./User";
function App() {
  const [name, setName] = React.useState("Shivam");
  return (
    <div className="App">
      <h1>Render Method in React</h1>
      <User />
      {/* <button onClick={() => setName("Singh")}>Update Name</button> */}
    </div>
  );
}
export default App;
