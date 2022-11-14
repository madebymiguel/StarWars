export default async function fetchAllPeople() {
  const numberOfStarShips = 75;
  const allStarShipsToFetch = [];

  for (let i = 1; i <= numberOfStarShips; i++) {
    allStarShipsToFetch.push(fetch(`https://swapi.dev/api/starships/${i}`));
  }

  const responses = await Promise.all(allStarShipsToFetch);
  return await Promise.all(responses.map((response) => response.json()));
}
