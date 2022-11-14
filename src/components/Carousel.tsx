import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import "../scss/Carousel.scss";

export default function Carousel() {
  return (
    <div className="carousel-container">
      <Tilt>
        <Link to={"/planets"} className="link">
          <h2 className="carousel-item">planets</h2>
        </Link>
      </Tilt>

      <Tilt>
        <Link to={"/people"} className="link">
          <h2 className="carousel-item">people</h2>
        </Link>
      </Tilt>

      <Tilt>
        <Link to={"/films"} className="link">
          <h2 className="carousel-item">films</h2>
        </Link>
      </Tilt>

      <Tilt>
        <Link to={"/starships"} className="link">
          <h2 className="carousel-item">starships</h2>
        </Link>
      </Tilt>

      <Tilt>
        <Link to={"/vehicles"} className="link">
          <h2 className="carousel-item">vehicles</h2>
        </Link>
      </Tilt>

      <Tilt>
        <Link to={"/species"} className="link">
          <h2 className="carousel-item">species</h2>
        </Link>
      </Tilt>
    </div>
  );
}
