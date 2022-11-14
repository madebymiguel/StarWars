import { Link } from "react-router-dom";
import { Planet } from "../types/Planet";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface PlanetListProps {
  planets: Planet[];
}

function PlanetComponent({ name, url }: { name: string; url: string }) {
  const linkPath = getPathFromURL(url);
  console.log("linkpath", linkPath);

  return (
    <>
      <Link to={linkPath} className="link">
        {name}
        {", "}
      </Link>
    </>
  );
}

export default function PlanetList({ planets }: PlanetListProps) {
  const planetComponent = planets.map((planetObj) => {
    const { name } = planetObj;
    const { url } = planetObj;

    return <PlanetComponent key={url} name={name} url={url} />;
  });

  return (
    <div className="list-container">
      {planetComponent.map((planetComponent) => planetComponent)}
    </div>
  );
}
