import { Link } from "react-router-dom";
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
      <div className="grid-item-container">
        <h2 className="title">{name}</h2>
      </div>
    </Link>
  );
}
