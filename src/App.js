import "./App.css";
import React from "react";
function App() {
  const [data, setData] = React.useState({ name: "shivam", age: 24 });
  return (
    <div className="App">
      <h1>State Objects with Hooks</h1>
      <input
        type="text"
        placeholder="enter name"
        value={data.name}
        onChange={(e) => {
          setData({
            ...data,
            name: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="enter age"
        value={data.age}
        onChange={(e) => {
          setData({
            ...data,
            age: e.target.value,
          });
        }}
      />

      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
    </div>
  );
}
export default App;
