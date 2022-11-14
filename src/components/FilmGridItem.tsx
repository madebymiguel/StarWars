import { Link } from "react-router-dom";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/Grid.scss";

export interface FilmGridItemProps {
  episode_id: number;
  title: string;
  url: string;
}

export default function FilmGridItem({
  episode_id,
  title,
  url,
}: FilmGridItemProps) {
  const linkPath = getPathFromURL(url);

  return (
    <div className="film-grid-item-container">
      <Link to={linkPath} className="link">
        <h2 className="title">
          {"Episode "}
          {episode_id}
        </h2>
        <h2 className="title">{title}</h2>
      </Link>
    </div>
  );
}
