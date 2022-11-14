import { Specie } from "../types/Specie";

export default async function fetchSpecies(index: string) {
  const res = await fetch(`https://swapi.dev/api/species/${index}`);
  const specieResult: Specie = await res.json();
  return specieResult;
}
