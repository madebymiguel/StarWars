import { Vehicle } from "../types/Vehicle";

export default async function fetchAllVehicles() {
  let nextPage = `https://swapi.dev/api/vehicles/`;
  let vehicles: Vehicle[] = [];

  while (nextPage) {
    const res = await fetch(nextPage);
    const { next, results } = await res.json();
    nextPage = next;
    vehicles = [...vehicles, ...results];
  }

  return vehicles;
}
