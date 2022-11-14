import { Link } from "react-router-dom";
import { People } from "../types/People";
import getPathFromURL from "../utils/getPathFromURL";
import "../scss/List.scss";

export interface PeopleListProps {
  people: People[];
}

function ListComponent({ name, url }: { name: string; url: string }) {
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

export default function PeopleList({ people }: PeopleListProps) {
  const peopleComponent = people.map((personObj) => {
    const { name } = personObj;
    const { url } = personObj;

    return <ListComponent key={url} name={name} url={url} />;
  });

  return (
    <div className="list-container">
      {peopleComponent.map((peopleComponent) => peopleComponent)}
    </div>
  );
}
