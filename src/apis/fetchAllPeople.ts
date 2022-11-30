import { People } from "../types/People";

export default async function fetchAllPeople() {
  let nextPage = `https://swapi.dev/api/people/`;
  let people: People[] = [];

  while (nextPage) {
    const res = await fetch(nextPage);
    const { next, results } = await res.json();
    nextPage = next;
    people = [...people, ...results];
  }

  return people;
}
