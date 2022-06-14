import "./App.css";
import React from "react";
import Cols from "./Cols";
function App() {
  return (
    <div>
      <h1>React Fragment</h1>
      <table>
        <tbody>
          <tr>
            <Cols />
            <Cols />
            <Cols />
            <Cols />
            <Cols />
            <Cols />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default App;
