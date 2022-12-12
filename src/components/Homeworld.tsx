import { Link } from "react-router-dom";
import { Planet } from "../types/Planet";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface HomeWorldProps {
  homeWorld: Planet;
}

export default function HomeWorld({ homeWorld }: HomeWorldProps) {
  if (homeWorld.name === undefined || null) {
    return <span>unknown</span>;
  }

  const linkPath = getPathFromURL(homeWorld.url);

  return (
    <Link to={linkPath} className="homeworld-link">
      {homeWorld.name}
    </Link>
  );
}
