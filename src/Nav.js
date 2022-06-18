import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <br></br>
      <Link to="/about">About Page</Link>
    </div>
  );
}
export default Nav;
