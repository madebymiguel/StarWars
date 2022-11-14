import { Vehicle } from "../types/Vehicle";

export default async function fetchVehicle(index: string) {
  const res = await fetch(`https://swapi.dev/api/vehicles/${index}`);
  const vehicleResult: Vehicle = await res.json();
  return vehicleResult;
}
