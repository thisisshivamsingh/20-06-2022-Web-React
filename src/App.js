import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [users, setUser] = useState();
  useEffect(() => {
    getList();
  }, []);
  console.log(users);
  function getList() {
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((resp) => {
        // console.log(resp);
        setUser(resp);
      });
    });
  }
  function deleteUser(id) {
    fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" }).then(
      (result) => {
        result.json().then((resp) => {
          console.log(resp);
          getList();
        });
      }
    );
  }
  return (
    <div className="App">
      <h1>Delete Data with API Call</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Operations</td>
          </tr>
        </tbody>
        {users.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
            <td>
              <button onClick={() => deleteUser(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default App;
