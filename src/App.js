import logo from "./logo.svg";
import "./App.css";
// import User from "./User";

function App() {
  return (
    <div className="App">
      <h1>Hello World !</h1>
      <User />
      <User />
    </div>
  );
}
function User() {
  return (
    <div>
      <h1>User Component</h1>
      <h1>Hello</h1>
    </div>
  );
}
export default App;
