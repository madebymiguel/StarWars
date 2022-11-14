import { useEffect, useMemo, useState } from "react";
import GridItem from "./GridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllVehicles from "../apis/fetchAllVehicles";
import { Vehicle } from "../types/Vehicle";
import "../scss/Grid.scss";

export default function VehicleGrid() {
  const [isFetchingVehicles, setIsFetchingVehicles] = useState(false);
  const [fetchedVehicles, setFetchedVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    if (!isFetchingVehicles) {
      fetchAllVehicles().then((data) => {
        setFetchedVehicles(data);
        setIsFetchingVehicles(true);
      });
    }
  }, []);

  const vehicleGridItems = useMemo(() => {
    return fetchedVehicles.map((vehicle: Vehicle) => {
      if (!vehicle.detail) {
        return (
          <GridItem
            key={vehicle.url}
            name={vehicle.name.toUpperCase()}
            url={vehicle.url}
          />
        );
      }
    });
  }, [fetchedVehicles]);

  return (
    <div className="grid-container">
      {isFetchingVehicles ? (
        <div className="grid">{vehicleGridItems}</div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}
