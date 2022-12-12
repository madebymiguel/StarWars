import { Link } from "react-router-dom";
import { StarShip } from "../types/StarShip";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface StarShipListProps {
  starShips: StarShip[];
}

export interface StarShipComponentProps {
  name: string;
  url: string;
  count: number;
}

function StarShipComponent({ name, url, count }: StarShipComponentProps) {
  const linkPath = getPathFromURL(url);

  return (
    <Link to={linkPath} className="link">
      {name}
      {count > 0 ? ", " : ""}
    </Link>
  );
}

export default function StarShipList({ starShips }: StarShipListProps) {
  if (starShips.length === 0) {
    return (
      <div className="list-container">
        <span>No known StarShips</span>
      </div>
    );
  }

  let count = starShips.length;

  const starShipComponent = starShips.map((starShipObj) => {
    const { name } = starShipObj;
    const { url } = starShipObj;
    count--;

    return <StarShipComponent key={url} name={name} url={url} count={count} />;
  });

  return (
    <div className="list-container">
      {starShipComponent.map((starShipComponent) => starShipComponent)}
    </div>
  );
}
