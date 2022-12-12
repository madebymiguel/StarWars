import { Link } from "react-router-dom";
import { Vehicle } from "../types/Vehicle";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface VehicleListProps {
  vehicles: Vehicle[];
}

export interface VehicleComponentProps {
  name: string;
  url: string;
  count: number;
}

function VehicleComponent({ name, url, count }: VehicleComponentProps) {
  const linkPath = getPathFromURL(url);

  return (
    <Link to={linkPath} className="link">
      {name}
      {count > 0 ? ", " : ""}
    </Link>
  );
}

export default function VehicleList({ vehicles }: VehicleListProps) {
  if (vehicles.length === 0) {
    return (
      <div className="list-container">
        <span>No known Vehicles</span>
      </div>
    );
  }
  let count = vehicles.length;

  const vehicleComponent = vehicles.map((vehicleObj) => {
    const { name } = vehicleObj;
    const { url } = vehicleObj;
    count--;

    return <VehicleComponent key={url} name={name} url={url} count={count} />;
  });

  return (
    <div className="list-container">
      {vehicleComponent.map((vehicleComponent) => vehicleComponent)}
    </div>
  );
}
