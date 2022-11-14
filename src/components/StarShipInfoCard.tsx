import FilmList from "./FilmList";
import PeopleList from "./PeopleList";
import { Film } from "../types/Film";
import { People } from "../types/People";
import "../scss/StarShipInfoCard.scss";

export interface PlanetInfoCardProps {
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
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: People[];
  films: Film[];
}

export default function StarShipInfoCard({
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
  hyperdrive_rating,
  MGLT,
  starship_class,
  pilots,
  films,
}: PlanetInfoCardProps) {
  return (
    <div className="starship-info-card-container">
      <div className="header">
        <h2 className="title">{name.toUpperCase()}</h2>
      </div>
      <div className="spec-container">
        <h3 className="sub-title">Technical Specs</h3>

        <table className="table-formatter">
          <tbody className="table-body-formatter">
            <tr className="table-row-formatter">
              <th className="table-header-formatter">model</th>
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
              <td className="table-data-formatter">{length}</td>
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
              <td className="table-data-formatter">{cargo_capacity}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Consumables</th>
              <td className="table-data-formatter">{consumables}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Hyperdrive Rating</th>
              <td className="table-data-formatter">{hyperdrive_rating}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">MGLT</th>
              <td className="table-data-formatter">{MGLT}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Starship Class</th>
              <td className="table-data-formatter">{starship_class}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="pilot-container">
        <h3 className="sub-title">Known Pilots</h3>
        <span className="lead-up">Some noteable pilots are:</span>
        <PeopleList people={pilots} />
      </div>

      <div className="film-container">
        <h3 className="sub-title">Film Appearances</h3>
        <span className="lead-up">
          This StarShip is well-known for its appearances in:
        </span>
        <FilmList films={films} />
      </div>
    </div>
  );
}
