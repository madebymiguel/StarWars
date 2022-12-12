import { Link } from "react-router-dom";
import { People } from "../types/People";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface PeopleListProps {
  people: People[];
}

export interface PeopleComponentProps {
  name: string;
  url: string;
  count: number;
}

function ListComponent({ name, url, count }: PeopleComponentProps) {
  const linkPath = getPathFromURL(url);

  return (
    <Link to={linkPath} className="link">
      {name}
      {count > 0 ? ", " : ""}
    </Link>
  );
}

export default function PeopleList({ people }: PeopleListProps) {
  if (people.length === 0) {
    return (
      <div className="list-container">
        <span>No known People</span>
      </div>
    );
  }

  let count = people.length;

  const peopleComponent = people.map((personObj) => {
    const { name } = personObj;
    const { url } = personObj;
    count--;

    return <ListComponent key={url} name={name} url={url} count={count} />;
  });

  return (
    <div className="list-container">
      {peopleComponent.map((peopleComponent) => peopleComponent)}
    </div>
  );
}
