import { Film } from "../types/Film";

export default async function fetchFilm(index: string) {
  const res = await fetch(`https://swapi.dev/api/films/${index}`);
  const filmResult: Film = await res.json();
  return filmResult;
}
