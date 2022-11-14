import { People } from "../types/People";

export default async function fetchPeople(index: string) {
  const res = await fetch(`https://swapi.dev/api/people/${index}`);
  const peopleResult: People = await res.json();
  return peopleResult;
}
