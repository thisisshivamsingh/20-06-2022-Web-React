import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  useEffect(() => {
    getList();
  }, []);
  function getList() {
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((resp) => {
        // console.log(resp);
        setUser(resp);
        setName(resp[0].name);
        setEmail(resp[0].email);
        setMobile(resp[0].mobile);
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
  function selectUser(id) {
    console.log(users[id - 1]);
    let item = users[id - 1];
    setName(item.name);
    setEmail(item.email);
    setMobile(item.mobile);
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
            <td>
              <button onClick={() => selectUser(item.id)}>Update</button>
            </td>
          </tr>
        ))}
      </table>
      <div>
        <input type="text" value={name} />
        <br />
        <br />
        <input type="text" value={email} />
        <br />
        <br />
        <input type="text" value={mobile} />
        <br />
        <br />
        <button>Update User</button>
      </div>
    </div>
  );
}
export default App;
