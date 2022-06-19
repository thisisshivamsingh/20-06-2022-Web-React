import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((resp) => {
        // console.log("result", resp);
        setData(resp);
      });
    });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <h1>Get API Call</h1>
      <table border="1">
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default App;
