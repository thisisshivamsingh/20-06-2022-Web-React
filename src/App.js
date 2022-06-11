import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Student from "./Student";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: 1,
//     };
//   }
//   apple() {
//     this.setState({ data: this.state.data + 1 });
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.data}</h1>
//         <button onClick={() => this.apple()}>Update Data</button>
//       </div>
//     );
//   }
// }
function App() {
  const [name, setName] = useState("Shivam");
  // function apple() {
  //   alert("hello");
  // }
  return (
    <div className="App">
      <h1>Props in React</h1>
      <Student
        name={name}
        // email="shivamsingh661998@gmail.com"
        // other={{ address: "delhi", mobile: "000" }}
      />
      {/* <Student
        name={"peter"}
        email="peter661998@gmail.com"
        other={{ address: "noida", mobile: "111" }}
      />
      <Student
        name={"priti"}
        email="priti661998@gmail.com"
        other={{ address: "delhi", mobile: "222" }}
      /> */}
      <button
        onClick={() => {
          setName("Singh");
        }}
      >
        Update Name
      </button>
    </div>
  );
}

export default App;
