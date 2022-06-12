import "./App.css";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "shivam" };
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    // this.setState({ name: "Singh" });
    return (
      <div className="App">
        <h1>Component Did Mount {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "Singh" });
          }}
        >
          Update Name
        </button>
      </div>
    );
  }
}
export default App;
