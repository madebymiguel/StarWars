import { Planet } from "../types/Planet";

export default async function fetchPlanet(index: string) {
  const res = await fetch(`https://swapi.dev/api/planets/${index}`);
  const planetResult: Planet = await res.json();
  return planetResult;
}
