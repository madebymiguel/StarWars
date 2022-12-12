import { Link } from "react-router-dom";
import { Planet } from "../types/Planet";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface PlanetListProps {
  planets: Planet[];
}

export interface PlanetComponentProps {
  name: string;
  url: string;
  count: number;
}

function PlanetComponent({ name, url, count }: PlanetComponentProps) {
  const linkPath = getPathFromURL(url);

  return (
    <>
      <Link to={linkPath} className="link">
        {name}
        {count > 0 ? ", " : ""}
      </Link>
    </>
  );
}

export default function PlanetList({ planets }: PlanetListProps) {
  if (planets.length === 0) {
    return (
      <div className="list-container">
        <span>No known Planets</span>
      </div>
    );
  }

  let count = planets.length;

  const planetComponent = planets.map((planetObj) => {
    const { name } = planetObj;
    const { url } = planetObj;
    count--;

    return <PlanetComponent key={url} name={name} url={url} count={count} />;
  });

  return (
    <div className="list-container">
      {planetComponent.map((planetComponent) => planetComponent)}
    </div>
  );
}
