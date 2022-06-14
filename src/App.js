import "./App.css";
import React from "react";
import { Button, Alert } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <h1>Install Bootstrap</h1>
      {<Alert variant="warning">This is a warning alert—check it out!</Alert>}
    </div>
  );
}
export default App;
