export default async function fetchAllFilms() {
  const numberOfFilms = 6;
  const allFilmsToFetch = [];

  for (let i = 1; i <= numberOfFilms; i++) {
    allFilmsToFetch.push(fetch(`https://swapi.dev/api/films/${i}`));
  }

  const responses = await Promise.all(allFilmsToFetch);
  return await Promise.all(responses.map((response) => response.json()));
}
