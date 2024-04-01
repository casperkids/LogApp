import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Home = () => {
  return (
    <>
      <div className="fixed-header">
        <div className="titlediv">
          <h1 className="title">Robo Log</h1>
          <h4 className="title">- Daily Musings with Robot -</h4>
          <hr
            className="border-top border-secondary"
            style={{ marginTop: "15px" }}
          />
        </div>
        <StyledNavbar />
      </div>

      <Outlet />
    </>
  );
};
export default Home;
