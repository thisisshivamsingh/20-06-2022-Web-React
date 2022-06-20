import React from "react";
import { CommonContext } from "./CommonContext";
function UpdateButton() {
  return (
    <CommonContext.Consumer>
      {({ updateColor }) => (
        <div>
          <button onClick={() => updateColor("yellow")}>
            Update yellow color
          </button>
          <button onClick={() => updateColor("blue")}>Update blue color</button>
          <button onClick={() => updateColor("red")}>Update red color</button>
        </div>
      )}
    </CommonContext.Consumer>
  );
}
export default UpdateButton;
