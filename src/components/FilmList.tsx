import { Link } from "react-router-dom";
import { Film } from "../types/Film";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface FilmListProps {
  films: Film[];
}

function FilmComponent({
  episode_id,
  title,
  url,
}: {
  episode_id: number;
  title: string;
  url: string;
}) {
  const linkPath = getPathFromURL(url);
  console.log("linkpath", linkPath);

  return (
    <>
      <Link to={linkPath} className="link">
        {"Episode "}
        {episode_id}
        {", "} {title}
        {", "}
      </Link>
    </>
  );
}

export default function FilmList({ films }: FilmListProps) {
  const filmComponent = films.map((filmObj) => {
    const { episode_id } = filmObj;
    const { title } = filmObj;
    const { url } = filmObj;

    return (
      <FilmComponent
        key={url}
        episode_id={episode_id}
        title={title}
        url={url}
      />
    );
  });

  return (
    <div className="list-container">
      {filmComponent.map((filmComponent) => filmComponent)}
    </div>
  );
}
