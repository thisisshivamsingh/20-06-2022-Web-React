import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  function saveUser() {
    console.log({ name, email, mobile });
    const data = { name, email, mobile };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      // console.log("result", result);
      result.json().then((resp) => {
        console.log("resp", resp);
      });
    });
  }
  return (
    <div className="App">
      <h1>POST API Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />
      <br />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        name="name"
      />
      <br />
      <br />
      <input
        type="text"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
        name="name"
      />
      <br />
      <br />
      <button type="button" onClick={saveUser}>
        Save New User
      </button>
    </div>
  );
}
export default App;
