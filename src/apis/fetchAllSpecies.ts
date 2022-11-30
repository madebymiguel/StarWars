import { Specie } from "../types/Specie";

export default async function fetchAllSpecies() {
  let nextPage = `https://swapi.dev/api/species/`;
  let species: Specie[] = [];

  while (nextPage) {
    const res = await fetch(nextPage);
    const { next, results } = await res.json();
    nextPage = next;
    species = [...species, ...results];
  }

  return species;
}
