import { Link } from "react-router-dom";
import { Film } from "../types/Film";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface FilmListProps {
  films: Film[];
}

export interface FilmComponentProps {
  episode_id: number;
  title: string;
  url: string;
  count: number;
}

function FilmComponent({ episode_id, title, url, count }: FilmComponentProps) {
  const linkPath = getPathFromURL(url);

  return (
    <Link to={linkPath} className="link">
      {"Episode "}
      {episode_id}
      {" | "} {title}
      {count > 0 ? ", " : ""}
    </Link>
  );
}

export default function FilmList({ films }: FilmListProps) {
  if (films.length === 0) {
    return (
      <div className="list-container">
        <span>No known Films</span>
      </div>
    );
  }

  let count = films.length;

  const filmComponent = films.map((filmObj) => {
    const { episode_id } = filmObj;
    const { title } = filmObj;
    const { url } = filmObj;
    count--;

    return (
      <FilmComponent
        key={url}
        episode_id={episode_id}
        title={title}
        url={url}
        count={count}
      />
    );
  });

  return (
    <div className="list-container">
      {filmComponent.map((filmComponent) => filmComponent)}
    </div>
  );
}
