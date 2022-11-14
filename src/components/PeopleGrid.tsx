import { useEffect, useMemo, useState } from "react";
import GridItem from "./GridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllPeople from "../apis/fetchAllPeople";
import { People } from "../types/People";
import "../scss/Grid.scss";

export default function PeopleGrid() {
  const [isFetchingPeople, setIsFetchingPeople] = useState(false);
  const [fetchedPeople, setFetchedPeople] = useState<People[]>([]);

  useEffect(() => {
    if (!isFetchingPeople) {
      fetchAllPeople().then((data) => {
        setFetchedPeople(data);
        setIsFetchingPeople(true);
      });
    }
  }, []);

  const peopleGridItems = useMemo(() => {
    return fetchedPeople.map((people: People) => {
      if (!people.detail) {
        return (
          <GridItem key={people.url} name={people.name} url={people.url} />
        );
      }
    });
  }, [fetchedPeople]);

  return (
    <div className="grid-container">
      {isFetchingPeople ? (
        <div className="grid">{peopleGridItems}</div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}
