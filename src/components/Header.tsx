import { Link } from "react-router-dom";
import "../scss/Header.scss";

export default function Header() {
  return (
    <div id="header">
      <Link className="title-link" to={"/"}>
        <h1 className="title">Star Wars</h1>
      </Link>
    </div>
  );
}
