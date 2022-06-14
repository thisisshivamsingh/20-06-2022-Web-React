import "./App.css";
import React from "react";
function App() {
  // const students = ["Shivam", "Singh", "Sam", "Peter"];
  const students = [
    { name: "shivam", email: "shivam@test.com", contact: 888 },
    { name: "singh", email: "singh@test.com", contact: 111 },
    { name: "sam", email: "sam@test.com", contact: 222 },
    { name: "peter", email: "peter@test.com", contact: 333 },
  ];
  return (
    <div className="App">
      <h1>Handle Array with List</h1>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        {students.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.contact}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default App;
