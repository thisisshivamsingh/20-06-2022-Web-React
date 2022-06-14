import "./App.css";
import React from "react";
import { Table } from "react-bootstrap";
function App() {
  const users = [
    {
      name: "Shivam",
      email: "shivam@test.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
        { Hn: "43", city: "Delhi", country: "India" },
        { Hn: "90", city: "Noida", country: "India" },
      ],
    },
    {
      name: "Bruce",
      email: "bruce@test.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
        { Hn: "43", city: "Delhi", country: "India" },
        { Hn: "90", city: "Noida", country: "India" },
      ],
    },
    {
      name: "Peter",
      email: "peter@test.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
        { Hn: "43", city: "Delhi", country: "India" },
        { Hn: "90", city: "Noida", country: "India" },
      ],
    },
    {
      name: "Sam",
      email: "sam@test.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "34", city: "Gurgaon", country: "India" },
        { Hn: "43", city: "Delhi", country: "India" },
        { Hn: "90", city: "Noida", country: "India" },
      ],
    },
  ];
  return (
    <div className="App">
      <h1>List With Bootstrap Table</h1>
      <Table striped>
        <tbody>
          <tr>
            <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </tbody>
        {users.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <Table variant="dark" striped>
                <tbody>
                  {item.address.map((data) => (
                    <tr>
                      <td>{data.Hn}</td>
                      <td>{data.city}</td>
                      <td>{data.country}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
export default App;
