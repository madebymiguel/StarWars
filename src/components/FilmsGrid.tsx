import { useEffect, useMemo, useState } from "react";
import FilmGridItem from "./FilmGridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllFilms from "../apis/fetchAllFilms";
import { Film } from "../types/Film";
import setGridFromSessionStorage from "../utils/setGridSessionStorage";
import getGridFromSessionStorage from "../utils/getGridSessionStorage";
import "../scss/Grid.scss";

export default function FilmGrid() {
  const [isFetchingFilms, setIsFetchingFilms] = useState(false);
  const [fetchedFilms, setFetchedFilms] = useState<Film[]>([]);

  const sessionKey = "films";
  const getFilmSession = getGridFromSessionStorage(sessionKey);

  useEffect(() => {
    if (getFilmSession === null) {
      fetchAllFilms().then((data) => {
        setGridFromSessionStorage(sessionKey, data);
        setFetchedFilms(data);
        setIsFetchingFilms(true);
      });
    } else {
      const gridData = getGridFromSessionStorage(sessionKey);
      if (gridData) {
        setFetchedFilms(gridData);
        setIsFetchingFilms(true);
      }
    }
  }, []);

  const filmGridItems = useMemo(() => {
    return fetchedFilms.map((film: Film) => {
      return (
        <FilmGridItem
          key={film.url}
          episode_id={film.episode_id}
          title={film.title.toUpperCase()}
          url={film.url}
        />
      );
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
