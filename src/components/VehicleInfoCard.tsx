import FilmList from "./FilmList";
import PeopleList from "./PeopleList";
import { Film } from "../types/Film";
import { People } from "../types/People";
import "../scss/VehicleInfoCard.scss";

export interface VehicleInfoCardProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: People[];
  films: Film[];
}

export default function VehicleInfoCard({
  name,
  model,
  manufacturer,
  cost_in_credits,
  length,
  max_atmosphering_speed,
  crew,
  passengers,
  cargo_capacity,
  consumables,
  vehicle_class,
  pilots,
  films,
}: VehicleInfoCardProps) {
  return (
    <div className="vehicle-info-card-container">
      <div className="header">
        <h2 className="title">{name.toUpperCase()}</h2>
      </div>
      <div className="spec-container">
        <h3 className="sub-title">Technical Specs</h3>

        <table className="table-formatter">
          <tbody className="table-body-formatter">
            <tr className="table-row-formatter">
              <th className="table-header-formatter">Model</th>
              <td className="table-data-formatter">{model}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Manufacturer</th>
              <td className="table-data-formatter">{manufacturer}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Credits Cost</th>
              <td className="table-data-formatter">{cost_in_credits}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Length</th>
              <td className="table-data-formatter">
                {length === "unknown" ? (
                  <span>unknown</span>
                ) : (
                  <span>{length} m</span>
                )}
              </td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Max Atmosphering Speed</th>
              <td className="table-data-formatter">{max_atmosphering_speed}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Crew</th>
              <td className="table-data-formatter">{crew}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Passengers</th>
              <td className="table-data-formatter">{passengers}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Cargo Capacity</th>
              <td className="table-data-formatter">
                {cargo_capacity === "unknown" ? (
                  <span>unknown</span>
                ) : (
                  <span>{cargo_capacity} kg</span>
                )}
              </td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Consumables</th>
              <td className="table-data-formatter">{consumables}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Vehicle Class</th>
              <td className="table-data-formatter">{vehicle_class}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pilot-container">
        <h3 className="sub-title">Known Users</h3>
        <PeopleList people={pilots} />
      </div>

      <div className="film-container">
        <h3 className="sub-title">Film Appearances</h3>
        <FilmList films={films} />
      </div>
    </div>
  );
}
