import { Link } from "react-router-dom";
import { Specie } from "../types/Specie";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface SpecieListProps {
  species: Specie[];
}

function SpecieComponent({ name, url }: { name: string; url: string }) {
  const linkPath = getPathFromURL(url);

  return (
    <>
      <Link to={linkPath} className="link">
        {name}
        {", "}
      </Link>
    </>
  );
}

export default function SpecieList({ species }: SpecieListProps) {
  const specieComponent = species.map((specieObj) => {
    const { name } = specieObj;
    const { url } = specieObj;

    return <SpecieComponent key={url} name={name} url={url} />;
  });

  return (
    <div className="list-container">
      {specieComponent.map((specieComponent) => specieComponent)}
    </div>
  );
}
