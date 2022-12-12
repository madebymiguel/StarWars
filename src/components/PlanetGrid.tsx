import { useEffect, useMemo, useState } from "react";
import GridItem from "./GridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllPlanets from "../apis/fetchAllPlanets";
import { Planet } from "../types/Planet";
import setGridFromSessionStorage from "../utils/setGridSessionStorage";
import getGridFromSessionStorage from "../utils/getGridSessionStorage";
import "../scss/Grid.scss";

export default function PlanetGrid() {
  const [isFetchingPlanets, setIsFetchingPlanets] = useState(false);
  const [fetchedPlanets, setFetchedPlanets] = useState<Planet[]>([]);

  const sessionKey = "planets";
  const getPlanetSession = getGridFromSessionStorage(sessionKey);

  useEffect(() => {
    if (getPlanetSession === null) {
      fetchAllPlanets().then((data) => {
        setGridFromSessionStorage(sessionKey, data);
        setFetchedPlanets(data);
        setIsFetchingPlanets(true);
      });
    } else {
      const gridData = getGridFromSessionStorage(sessionKey);
      if (gridData) {
        setFetchedPlanets(gridData);
        setIsFetchingPlanets(true);
      }
    }
  }, []);

  const planetGridItems = useMemo(() => {
    return fetchedPlanets.map((planet: Planet) => {
      return (
        <GridItem
          key={planet.url}
          name={planet.name.toUpperCase()}
          url={planet.url}
        />
      );
    });
  }, [fetchedPlanets]);

  return (
    <div className="grid-container">
      {isFetchingPlanets ? (
        <div className="grid">{planetGridItems}</div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}
