import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/log">Logs</Link>
      <Link to="logs/:journalId"></Link>
    </nav>
  );
};
export default Navbar;
