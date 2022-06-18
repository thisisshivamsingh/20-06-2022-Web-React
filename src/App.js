import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://universities.hipolabs.com/search?country=United+States").then(
      (result) => {
        result.json().then((resp) => {
          // console.log("result", resp);
          setData(resp);
        });
      }
    );
  }, []);
  console.log(data);
  return (
    <div className="App">
      <h1>Get API Call</h1>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>Country</td>
          <td>Country Code</td>
          <td>Website</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.country}</td>
            <td>{item.alpha_two_code}</td>
            <td>{item.web_pages[0]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default App;
