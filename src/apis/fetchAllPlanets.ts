import { Planet } from "../types/Planet";

export default async function fetchAllPlanets() {
  let nextPage = `https://swapi.dev/api/planets/`;
  let planets: Planet[] = [];

  while (nextPage) {
    const res = await fetch(nextPage);
    const { next, results } = await res.json();
    nextPage = next;
    planets = [...planets, ...results];
  }

  return planets;
}
