import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "" };
            }}
            className="nav-bar-link"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "" };
            }}
            className="nav-bar-link"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "" };
            }}
            className="nav-bar-link"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "" };
            }}
            className="nav-bar-link"
            to="/filter"
          >
            Filter
          </NavLink>
        </li>
        {/* <li>
          <a href="/">Home </a>
        </li>
        <li>
          <a href="/about">About </a>
        </li> */}
      </ul>
    </div>
  );
}
export default NavBar;
