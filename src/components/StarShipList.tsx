import { Link } from "react-router-dom";
import { StarShip } from "../types/StarShip";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface StarShipListProps {
  starShips: StarShip[];
}

function StarShipComponent({ name, url }: { name: string; url: string }) {
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

export default function StarShipList({ starShips }: StarShipListProps) {
  const starShipComponent = starShips.map((starShipObj) => {
    const { name } = starShipObj;
    const { url } = starShipObj;

    return <StarShipComponent key={url} name={name} url={url} />;
  });

  return (
    <div className="list-container">
      {starShipComponent.map((starShipComponent) => starShipComponent)}
    </div>
  );
}
