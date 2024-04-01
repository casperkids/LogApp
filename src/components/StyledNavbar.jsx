import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const StyledNavbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey", marginRight: "20px" };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/logs"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey", marginRight: "20px" };
        }}
      >
        Logs
      </NavLink>
    </nav>
  );
};
export default StyledNavbar;
