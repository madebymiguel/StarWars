import FilmList from "./FilmList";
import { Film } from "../types/Film";
import { Specie } from "../types/Specie";
import { Vehicle } from "../types/Vehicle";
import { StarShip } from "../types/StarShip";
import { Planet } from "../types/Planet";
import SpecieList from "./SpecieList";
import VehicleList from "./VehicleList";
import StarShipList from "./StarShipList";
import "../scss/PeopleInfoCard.scss";
import PlanetList from "./PlanetList";
import HomeWorld from "./Homeworld";

export interface PeopleInfoCardProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: Planet;
  films: Film[];
  species: Specie[];
  vehicles: Vehicle[];
  starships: StarShip[];
}

export default function PeopleInfoCard({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
  homeworld,
  films,
  species,
  vehicles,
  starships,
}: PeopleInfoCardProps) {
  return (
    <div className="people-info-card-container">
      <div className="header">
        <h2 className="title">{name.toUpperCase()}</h2>
      </div>
      <div className="characteristic-container">
        <h3 className="sub-title">Characteristic</h3>

        <table className="table-formatter">
          <tbody className="table-body-formatter">
            <tr className="table-row-formatter">
              <th className="table-header-formatter">Height</th>
              <td className="table-data-formatter">
                {height === "unknown" ? (
                  <span>unknown</span>
                ) : (
                  <span>{height} cm</span>
                )}
              </td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Mass</th>
              <td className="table-data-formatter">
                {mass === "unknown" ? (
                  <span>unknown</span>
                ) : (
                  <span>{mass} kg</span>
                )}
              </td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Hair Color</th>
              <td className="table-data-formatter">{hair_color}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Skin Color</th>
              <td className="table-data-formatter">{skin_color}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Eye Color</th>
              <td className="table-data-formatter">{eye_color}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Gender</th>
              <td className="table-data-formatter">{gender}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Species</th>
              <td className="table-data-formatter">
                {<SpecieList species={species} />}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="about-container">
        <h3 className="sub-title">About</h3>
        <span className="lead-up">
          Born in the year {birth_year} on the planet of{" "}
          <HomeWorld homeWorld={homeworld} />
        </span>
      </div>

      <div className="films-container">
        <h3 className="sub-title">Film Apperances</h3>
        <FilmList films={films} />
      </div>

      <div className="vehicles-container">
        <h3 className="sub-title">Vehicles and StarShips</h3>
        <VehicleList vehicles={vehicles} />
        <StarShipList starShips={starships} />
      </div>
    </div>
  );
}
