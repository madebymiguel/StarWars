export default async function fetchAllPlanets() {
  const numberOfPlanets = 60;
  const allPlanetsToFetch = [];

  for (let i = 1; i <= numberOfPlanets; i++) {
    allPlanetsToFetch.push(fetch(`https://swapi.dev/api/planets/${i}`));
  }

  const responses = await Promise.all(allPlanetsToFetch);
  return await Promise.all(responses.map((response) => response.json()));
}
