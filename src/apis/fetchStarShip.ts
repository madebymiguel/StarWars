import { StarShip } from "../types/StarShip";

export default async function fetchStarShip(index: string) {
  const res = await fetch(`https://swapi.dev/api/starships/${index}`);
  const starShipResult: StarShip = await res.json();
  return starShipResult;
}
