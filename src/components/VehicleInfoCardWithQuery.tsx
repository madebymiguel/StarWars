import { useEffect, useState } from "react";
import { useParams } from "react-router";
import VehicleInfoCard from "./VehicleInfoCard";
import LoadingComponent from "./LoadingComponent";
import fetchVehicle from "../apis/fetchVehicle";
import fetchFromURLArray from "../apis/fetchFromURLArray";
import { Vehicle } from "../types/Vehicle";
import { People } from "../types/People";
import { Film } from "../types/Film";

export default function VehicleInfoCardWithQuery() {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [pilots, setPilots] = useState<People[] | null>(null);
  const [films, setFilms] = useState<Film[] | null>(null);

  const [finishedFetching, setFinishedFetching] = useState(false);
  const { index } = useParams();

  useEffect(() => {
    if (index) {
      fetchVehicle(index).then((vehicleData) => {
        setVehicle(vehicleData);
        fetchFromURLArray(vehicleData.pilots).then((pilots: People[]) => {
          setPilots(pilots);
        });
        fetchFromURLArray(vehicleData.films).then((films: Film[]) => {
          setFilms(films);
        });
        setFinishedFetching(true);
      });
    }
  }, []);

  return (
    <>
      {finishedFetching ? (
        vehicle !== null &&
        pilots !== null &&
        films !== null && (
          <VehicleInfoCard
            name={vehicle.name}
            model={vehicle.model}
            manufacturer={vehicle.manufacturer}
            cost_in_credits={vehicle.cost_in_credits}
            length={vehicle.length}
            max_atmosphering_speed={vehicle.max_atmosphering_speed}
            crew={vehicle.crew}
            passengers={vehicle.passengers}
            cargo_capacity={vehicle.cargo_capacity}
            consumables={vehicle.consumables}
            vehicle_class={vehicle.vehicle_class}
            pilots={pilots}
            films={films}
          />
        )
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
