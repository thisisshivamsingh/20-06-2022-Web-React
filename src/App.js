import "./App.css";
import React, { useRef } from "react";
function App() {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  function submitForm(e) {
    e.preventDefault();
    console.log("Input field 1 Value : ", inputRef.current.value);
    console.log("Input field 2 Value : ", inputRef2.current.value);
    const input3 = document.getElementById("input3").value;
    console.log("Input field 3 Value : ", input3);
  }
  return (
    <div className="App">
      <h1>Uncontrolled Component</h1>
      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" /> <br /> <br />
        <input ref={inputRef2} type="text" /> <br /> <br />
        <input id="input3" type="text" /> <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
