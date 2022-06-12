import React from "react";
class User extends React.Component {
  constructor() {
    super();
    this.state = { email: "shivam661998@gmail.com" };
  }
  render() {
    console.log("Render method", this.state.email);
    return (
      <div>
        <h1>User Component</h1>
        <button
          onClick={() => this.setState({ email: "singh661998@gmail.com" })}
        >
          Update Email
        </button>
      </div>
    );
  }
}
export default User;
