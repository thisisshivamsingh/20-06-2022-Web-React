// import React from "react";
// export default class Student extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div style={{ backgroundColor: "skyBlue", margin: 20 }}>
//         <h1>{this.props.name}</h1>
//         <h3>{this.props.email}</h3>
//       </div>
//     );
//   }
// }

///////////// #27 component Will Unmount life cycle method ///////////////
import React from "react";
class Student extends React.Component {
  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }
  render() {
    return (
      <div className="App">
        <h1>Student Component</h1>
      </div>
    );
  }
}
export default Student;
