import { useEffect, useMemo, useState } from "react";
import GridItem from "./GridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllSpecies from "../apis/fetchAllSpecies";
import { Specie } from "../types/Specie";
import setGridFromSessionStorage from "../utils/setGridSessionStorage";
import getGridFromSessionStorage from "../utils/getGridSessionStorage";
import "../scss/Grid.scss";

export default function SpecieGrid() {
  const [isFetchingSpecies, setIsFetchingSpecies] = useState(false);
  const [fetchedSpecies, setFetchedSpecies] = useState<Specie[]>([]);

  const sessionKey = "species";
  const getSpecieSession = getGridFromSessionStorage(sessionKey);

  useEffect(() => {
    if (getSpecieSession === null) {
      fetchAllSpecies().then((data) => {
        setGridFromSessionStorage(sessionKey, data);
        setFetchedSpecies(data);
        setIsFetchingSpecies(true);
      });
    } else {
      const gridData = getGridFromSessionStorage(sessionKey);
      if (gridData) {
        setFetchedSpecies(gridData);
        setIsFetchingSpecies(true);
      }
    }
  }, []);

  const specieGridItems = useMemo(() => {
    return fetchedSpecies.map((specie: Specie) => {
      return (
        <GridItem
          key={specie.url}
          name={specie.name.toUpperCase()}
          url={specie.url}
        />
      );
    });
  }, [fetchedSpecies]);

  return (
    <div className="grid-container">
      {isFetchingSpecies ? (
        <div className="grid">{specieGridItems}</div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}
