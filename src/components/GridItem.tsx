import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/Grid.scss";

export interface GridItemsProps {
  name: string;
  url: string;
}

export default function GridItem({ name, url }: GridItemsProps) {
  const linkPath = getPathFromURL(url);

  return (
    <Link to={linkPath} className="link">
      <Tilt>
        <div className="grid-item-container">
          <h2 className="title">{name}</h2>
        </div>
      </Tilt>
    </Link>
  );
}
