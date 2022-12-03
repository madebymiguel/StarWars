import FilmList from "./FilmList";
import PeopleList from "./PeopleList";
import { Film } from "../types/Film";
import { People } from "../types/People";
import "../scss/PlanetInfoCard.scss";

export interface PlanetInfoCardProps {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: People[];
  films: Film[];
}

export default function PlanetInfoCard({
  name,
  rotation_period,
  orbital_period,
  diameter,
  climate,
  gravity,
  terrain,
  surface_water,
  population,
  residents,
  films,
}: PlanetInfoCardProps) {
  return (
    <div className="planet-info-card-container">
      <div className="header">
        <h2 className="title">{name.toUpperCase()}</h2>
      </div>
      <div className="planet-characteristic-container">
        <h3 className="sub-title">Planet Characteristic</h3>

        <table className="table-formatter">
          <tbody className="table-body-formatter">
            <tr className="table-row-formatter">
              <th className="table-header-formatter">Diameter</th>
              <td className="table-data-formatter">{diameter} km</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Climate</th>
              <td className="table-data-formatter">{climate}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Terrain</th>
              <td className="table-data-formatter">{terrain}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Surface Water</th>
              <td className="table-data-formatter">{surface_water}%</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Gravity</th>
              <td className="table-data-formatter">{gravity}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Orbital Period</th>
              <td className="table-data-formatter">{orbital_period}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Rotation Period</th>
              <td className="table-data-formatter">{rotation_period}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Population</th>
              <td className="table-data-formatter">{population}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="famous-people-container">
        <h3 className="sub-title">Feature People</h3>
        <PeopleList people={residents} />
      </div>

      <div className="feature-films-container">
        <h3 className="sub-title">Film Appearances</h3>
        <FilmList films={films} />
      </div>
    </div>
  );
}
