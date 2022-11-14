import FilmList from "./FilmList";
import PeopleList from "./PeopleList";
import { Film } from "../types/Film";
import { People } from "../types/People";
import { Planet } from "../types/Planet";
import "../scss/SpecieInfoCard.scss";

export interface SpecieInfoCardProps {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: Planet;
  language: string;
  people: People[];
  films: Film[];
}

export default function SpecieInfoInfoCard({
  name,
  classification,
  designation,
  average_height,
  skin_colors,
  hair_colors,
  eye_colors,
  average_lifespan,
  homeworld,
  language,
  people,
  films,
}: SpecieInfoCardProps) {
  return (
    <div className="specie-info-card-container">
      <div className="header">
        <h2 className="title">{name.toUpperCase()}</h2>
      </div>
      <div className="characteristic-container">
        <h3 className="sub-title">Characteristic</h3>
        <table className="table-formatter">
          <tbody className="table-body-formatter">
            <tr className="table-row-formatter">
              <th className="table-header-formatter">Classification</th>
              <td className="table-data-formatter">{classification}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Designation</th>
              <td className="table-data-formatter">{designation}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Average Height</th>
              <td className="table-data-formatter">{average_height}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Skin Colors</th>
              <td className="table-data-formatter">{skin_colors}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Hair Colors</th>
              <td className="table-data-formatter">{hair_colors}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Eye Colors</th>
              <td className="table-data-formatter">{eye_colors}</td>
            </tr>

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Average Lifespan</th>
              <td className="table-data-formatter">{average_lifespan}</td>
            </tr>

            {/* <tr className="table-row-formatter">
              <th className="table-header-formatter">HomeWorld</th>
              <td className="table-data-formatter">{homeworld}</td>
            </tr> */}

            <tr className="table-row-formatter">
              <th className="table-header-formatter">Language</th>
              <td className="table-data-formatter">{language}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="people-container">
        <h3 className="sub-title">Famous People</h3>
        <span className="lead-up">
          Some noteable People from this specie are:
        </span>
        <PeopleList people={people} />
      </div>

      <div className="film-container">
        <h3 className="sub-title">Film Appearances</h3>
        <span className="lead-up">
          This specie is well-known for its appearances in:
        </span>
        <FilmList films={films} />
      </div>
    </div>
  );
}
