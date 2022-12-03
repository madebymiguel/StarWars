import PlanetList from "./PlanetList";
import SpecieList from "./SpecieList";
import VehicleList from "./VehicleList";
import StarShipList from "./StarShipList";
import PeopleList from "./PeopleList";
import { Specie } from "../types/Specie";
import { Vehicle } from "../types/Vehicle";
import { StarShip } from "../types/StarShip";
import { Planet } from "../types/Planet";
import { People } from "../types/People";
import "../scss/FilmInfoCard.scss";

export interface FilmInfoCardProps {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: People[];
  planets: Planet[];
  starships: StarShip[];
  vehicles: Vehicle[];
  species: Specie[];
}

export default function FlimInfoCard({
  title,
  episode_id,
  opening_crawl,
  director,
  producer,
  release_date,
  characters,
  planets,
  starships,
  vehicles,
  species,
}: FilmInfoCardProps) {
  return (
    <div className="film-info-card-container">
      <div className="header">
        <h2 className="title">
          {"Episode "} {episode_id} {"| "}
          {title.toUpperCase()}
        </h2>
      </div>
      <div className="about-container">
        <h3 className="sub-title">About</h3>
        <div className="about-sub-container">
          <table className="table-formatter">
            <tbody className="table-body-formatter">
              <tr className="table-row-formatter">
                <th className="table-header-formatter">Director</th>
                <td className="table-data-formatter">{director}</td>
              </tr>

              <tr className="table-row-formatter">
                <th className="table-header-formatter">Producer</th>
                <td className="table-data-formatter">{producer}</td>
              </tr>

              <tr className="table-row-formatter">
                <th className="table-header-formatter">Release Date</th>
                <td className="table-data-formatter">{release_date}</td>
              </tr>
            </tbody>
          </table>
          <div className="crawl">
            <h4 className="crawl-title">Opening Crawl</h4>
            <p className="crawl-text">{opening_crawl}</p>
          </div>
        </div>
      </div>

      <div className="people-container">
        <h3 className="sub-title">Character Appearances</h3>
        <PeopleList people={characters} />
      </div>

      <div className="planet-container">
        <h3 className="sub-title">Planet Appearances</h3>
        <PlanetList planets={planets} />
      </div>

      <div className="starship-container">
        <h3 className="sub-title">StarShip Appearances</h3>
        <StarShipList starShips={starships} />
      </div>

      <div className="vehicle-container">
        <h3 className="sub-title">Vehicle Appearances</h3>
        <VehicleList vehicles={vehicles} />
      </div>

      <div className="specie-container">
        <h3 className="sub-title">Specie Appearances</h3>
        <SpecieList species={species} />
      </div>
    </div>
  );
}
