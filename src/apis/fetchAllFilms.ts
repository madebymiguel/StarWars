import { Film } from "../types/Film";

export default async function fetchAllFilms() {
  let nextPage = `https://swapi.dev/api/films/`;
  let films: Film[] = [];

  while (nextPage) {
    const res = await fetch(nextPage);
    const { next, results } = await res.json();
    nextPage = next;
    films = [...films, ...results];
  }

  return films;
}
