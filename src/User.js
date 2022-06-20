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

// import "./App.css";
// import React, { useEffect } from "react";
// function App(props) {
//   useEffect(() => {
//     alert("count. is " + props.count);
//   }, [props.count, props.data]);
//   return (
//     <div className="App">
//       <h1>Count Props: {props.count}</h1>
//       <h1>Data Props: {props.data}</h1>
//     </div>
//   );
// }
// export default App;

//////////////// #36 Reuse Component in loop ///////////////

// function User(props) {
//   return (
//     <div>
//       <span>{props.data.name}</span>
//       <span>{props.data.email}</span>
//       <button>Hello {props.data.contact}</button>
//     </div>
//   );
// }
// export default User;

//////////////// #38 Send Data Child to Parent Component ////////////////

// function User(props) {
//   const data = { name: "shivam singh", email: "shivam@test.com" };
//   return (
//     <>
//       <h2>User Name : </h2>
//       <button onClick={() => props.alert(data)}>Click Me</button>
//     </>
//   );
// }

// export default User;

////////////// #39 Pure Component in ReactJs ///////////////

// import "./App.css";
// import React, { PureComponent } from "react";
// class User extends PureComponent {
//   render() {
//     console.log("user component check-rerendering");
//     return (
//       <div className="App">
//         <h1>User Component {this.props.count}</h1>
//       </div>
//     );
//   }
// }
// export default User;

////////////// #43 forwardRef example /////////////

// import React, { forwardRef } from "react";
// function User(props, ref) {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// }
// export default forwardRef(User);

/////////////// #50 Dynamic Routing /////////////////

// // import { withRouter } from "react-router-dom";
// function User(prop) {
//   //   console.log(prop.match.params.id);
//   return (
//     <div>
//       <h1>User Component</h1>
//       {/* <h1>Hi this is user no {prop.match.params.id}</h1> */}
//       {/* <h1>Hi this is {prop.match.params.name}</h1> */}
//     </div>
//   );
// }
// export default User;
// // export default withRouter(User);

//////////// #58 Previous Props with Hooks /////////////

import React, { useEffect, useRef } from "react";
function User(props) {
  const lastVal = useRef();
  useEffect(() => {
    lastVal.current = props.count;
  });
  const previousProps = lastVal.current;
  return (
    <div>
      <h1> Diff {props.count - previousProps}</h1>
      {/* <h2>previous val {previousProps}</h2> */}
    </div>
  );
}

export default User;
