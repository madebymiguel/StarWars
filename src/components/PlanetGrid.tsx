import { useEffect, useMemo, useState } from "react";
import GridItem from "./GridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllPlanets from "../apis/fetchAllPlanets";
import { Planet } from "../types/Planet";
import "../scss/Grid.scss";

export default function PlanetGrid() {
  const [isFetchingPlanets, setIsFetchingPlanets] = useState(false);
  const [fetchedPlanets, setFetchedPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    fetchAllPlanets().then((data) => {
      setFetchedPlanets(data);
    });
    setIsFetchingPlanets(true);
  }, []);

  const planetGridItems = useMemo(() => {
    return fetchedPlanets.map((planet: Planet) => {
      if (!planet.detail) {
        return (
          <GridItem
            key={planet.url}
            name={planet.name.toUpperCase()}
            url={planet.url}
          />
        );
      }
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
