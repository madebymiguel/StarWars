export default async function fetchAllVehicles() {
  const numberOfVehicles = 76;
  const allVehiclesToFetch = [];

  for (let i = 1; i <= numberOfVehicles; i++) {
    allVehiclesToFetch.push(fetch(`https://swapi.dev/api/vehicles/${i}`));
  }

  const responses = await Promise.all(allVehiclesToFetch);
  return await Promise.all(responses.map((response) => response.json()));
}
