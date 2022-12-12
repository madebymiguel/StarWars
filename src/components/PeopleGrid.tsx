import { useEffect, useMemo, useState } from "react";
import GridItem from "./GridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllPeople from "../apis/fetchAllPeople";
import { People } from "../types/People";
import setGridFromSessionStorage from "../utils/setGridSessionStorage";
import getGridFromSessionStorage from "../utils/getGridSessionStorage";
import "../scss/Grid.scss";

export default function PeopleGrid() {
  const [isFetchingPeople, setIsFetchingPeople] = useState(false);
  const [fetchedPeople, setFetchedPeople] = useState<People[]>([]);

  const sessionKey = "people";
  const getPeopleSession = getGridFromSessionStorage(sessionKey);

  useEffect(() => {
    if (getPeopleSession === null) {
      fetchAllPeople().then((data) => {
        setGridFromSessionStorage(sessionKey, data);
        setFetchedPeople(data);
        setIsFetchingPeople(true);
      });
    } else {
      const gridData = getGridFromSessionStorage(sessionKey);
      if (gridData) {
        setFetchedPeople(gridData);
        setIsFetchingPeople(true);
      }
    }
  }, []);

  const peopleGridItems = useMemo(() => {
    return fetchedPeople.map((people: People) => {
      return <GridItem key={people.url} name={people.name} url={people.url} />;
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
