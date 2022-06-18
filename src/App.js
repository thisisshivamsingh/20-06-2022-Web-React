import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import User from "./User";
function App() {
  const users = [
    { id: 1, name: "shivam", email: "shivam@test.com" },
    { id: 2, name: "sam", email: "sam@test.com" },
    { id: 3, name: "peter", email: "peter@test.com" },
    { id: 4, name: "bruce", email: "bruce@test.com" },
    { id: 5, name: "tony", email: "tony@test.com" },
    { id: 13, name: "batman", email: "bat@test.com" },
  ];
  return (
    <div className="App">
      <Router>
        <h1>React Dynamic Routing</h1>
        {users.map((item) => (
          <div>
            <Link to={"/user/" + item.id + "/" + item.name}>
              <h3>{item.name}</h3>
            </Link>
          </div>
        ))}
        <Routes>
          <Route path="/user/:id/:name" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
