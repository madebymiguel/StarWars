export default async function fetchAllPeople() {
  const numberOfPeople = 83;
  const allPeopleToFetch = [];

  for (let i = 1; i <= numberOfPeople; i++) {
    allPeopleToFetch.push(fetch(`https://swapi.dev/api/people/${i}`));
  }

  const responses = await Promise.all(allPeopleToFetch);
  return await Promise.all(responses.map((response) => response.json()));
}
