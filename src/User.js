// import "./App.css";
// import React, { useEffect } from "react";
// function User(props) {
//   useEffect(() => {
//     console.log("useEffect is called");
//   }, []);
//   return (
//     <div className="App">
//       <h1>User Component {props.countProps}</h1>
//     </div>
//   );
// }
// export default User;

////////////// #30 useEffect with condition | Part 2 | like component did Mount ////////////////

import "./App.css";
import React, { useEffect } from "react";
function App(props) {
  useEffect(() => {
    alert("count. is " + props.count);
  }, [props.count, props.data]);
  return (
    <div className="App">
      <h1>Count Props: {props.count}</h1>
      <h1>Data Props: {props.data}</h1>
    </div>
  );
}
export default App;
