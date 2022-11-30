import { StarShip } from "../types/StarShip";

export default async function fetchAllStarShips() {
  let nextPage = `https://swapi.dev/api/starships/`;
  let starShips: StarShip[] = [];

  while (nextPage) {
    const res = await fetch(nextPage);
    const { next, results } = await res.json();
    nextPage = next;
    starShips = [...starShips, ...results];
  }

  return starShips;
}
