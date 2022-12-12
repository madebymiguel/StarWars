import { Link } from "react-router-dom";
import { Specie } from "../types/Specie";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface SpecieListProps {
  species: Specie[];
}

export interface SpecieComponentProps {
  name: string;
  url: string;
  count: number;
}

function SpecieComponent({ name, url, count }: SpecieComponentProps) {
  const linkPath = getPathFromURL(url);

  return (
    <Link to={linkPath} className="link">
      {name}
      {count > 0 ? ", " : ""}
    </Link>
  );
}

export default function SpecieList({ species }: SpecieListProps) {
  if (species.length === 0) {
    return (
      <div className="list-container">
        <span>No known Species</span>
      </div>
    );
  }

  let count = species.length;

  const specieComponent = species.map((specieObj) => {
    const { name } = specieObj;
    const { url } = specieObj;
    count--;

    return <SpecieComponent key={url} name={name} url={url} count={count} />;
  });

  return (
    <div className="list-container">
      {specieComponent.map((specieComponent) => specieComponent)}
    </div>
  );
}
