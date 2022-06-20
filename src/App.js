import "./App.css";
import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(1);
  function updateCounter() {
    // const rand = Math.floor(Math.random() * 10);
    // setCount((pre) => {
    //   console.log(pre);
    //   if (pre < 5) {
    //     alert("low value");
    //   }
    //   return rand;
    // });
    for (let i = 0; i < 5; i++) {
      setCount((pre) => {
        return pre + 1;
      });
    }
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={updateCounter}>Click Me to Update counter</button>
    </div>
  );
}
export default App;
