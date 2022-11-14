import { Link } from "react-router-dom";
import { Vehicle } from "../types/Vehicle";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface VehicleListProps {
  vehicles: Vehicle[];
}

function VehicleComponent({ name, url }: { name: string; url: string }) {
  const linkPath = getPathFromURL(url);

  return (
    <>
      <Link to={linkPath} className="link">
        {name}
        {", "}
      </Link>
    </>
  );
}

export default function VehicleList({ vehicles }: VehicleListProps) {
  const vehicleComponent = vehicles.map((vehicleObj) => {
    const { name } = vehicleObj;
    const { url } = vehicleObj;

    return <VehicleComponent key={url} name={name} url={url} />;
  });

  return (
    <div className="list-container">
      {vehicleComponent.map((vehicleComponent) => vehicleComponent)}
    </div>
  );
}
