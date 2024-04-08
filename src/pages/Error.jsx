import { Link } from "react-router-dom";
import roboErrorImage from "../images/404_robo.png";

const Error = () => {
  return (
    <section className="section">
      <div>
        <img src={roboErrorImage} alt="roboErrorImage" />
      </div>
      <h2>404</h2>
      <p>page not found</p>
      <Link to="/">back home</Link>
    </section>
  );
};
export default Error;
