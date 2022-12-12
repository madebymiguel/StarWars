import { useEffect, useMemo, useState } from "react";
import GridItem from "./GridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllVehicles from "../apis/fetchAllVehicles";
import { Vehicle } from "../types/Vehicle";
import setGridFromSessionStorage from "../utils/setGridSessionStorage";
import getGridFromSessionStorage from "../utils/getGridSessionStorage";
import "../scss/Grid.scss";

export default function VehicleGrid() {
  const [isFetchingVehicles, setIsFetchingVehicles] = useState(false);
  const [fetchedVehicles, setFetchedVehicles] = useState<Vehicle[]>([]);

  const sessionKey = "vehicles";
  const getVehicleSession = getGridFromSessionStorage(sessionKey);

  useEffect(() => {
    if (getVehicleSession === null) {
      fetchAllVehicles().then((data) => {
        setGridFromSessionStorage(sessionKey, data);
        setFetchedVehicles(data);
        setIsFetchingVehicles(true);
      });
    } else {
      const gridData = getGridFromSessionStorage(sessionKey);
      if (gridData) {
        setFetchedVehicles(gridData);
        setIsFetchingVehicles(true);
      }
    }
  }, []);

  const vehicleGridItems = useMemo(() => {
    return fetchedVehicles.map((vehicle: Vehicle) => {
      return (
        <GridItem
          key={vehicle.url}
          name={vehicle.name.toUpperCase()}
          url={vehicle.url}
        />
      );
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
