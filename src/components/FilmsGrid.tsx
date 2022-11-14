import { useEffect, useMemo, useState } from "react";
import FilmGridItem from "./FilmGridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllFilms from "../apis/fetchAllFilms";
import { Film } from "../types/Film";
import "../scss/Grid.scss";

export default function FilmGrid() {
  const [isFetchingFilms, setIsFetchingFilms] = useState(false);
  const [fetchedFilms, setFetchedFilms] = useState<Film[]>([]);

  useEffect(() => {
    if (!isFetchingFilms) {
      fetchAllFilms().then((data) => {
        setFetchedFilms(data);
        setIsFetchingFilms(true);
      });
    }
  }, []);

  const filmGridItems = useMemo(() => {
    return fetchedFilms.map((film: Film) => {
      if (!film.detail) {
        return (
          <FilmGridItem
            key={film.url}
            episode_id={film.episode_id}
            title={film.title.toUpperCase()}
            url={film.url}
          />
        );
      }
    });
  }, [fetchedFilms]);

  return (
    <div className="grid-container">
      {isFetchingFilms ? (
        <div className="grid">{filmGridItems}</div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}
