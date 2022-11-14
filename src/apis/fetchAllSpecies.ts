export default async function fetchAllSpecies() {
  const numberOfSpecies = 37;
  const allSpeciesToFetch = [];

  for (let i = 1; i <= numberOfSpecies; i++) {
    allSpeciesToFetch.push(fetch(`https://swapi.dev/api/species/${i}`));
  }

  const responses = await Promise.all(allSpeciesToFetch);
  return await Promise.all(responses.map((response) => response.json()));
}
