import { useEffect, useMemo, useState } from "react";
import GridItem from "./GridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllSpecies from "../apis/fetchAllSpecies";
import { Specie } from "../types/Specie";
import "../scss/Grid.scss";

export default function SpecieGrid() {
  const [isFetchingSpecies, setIsFetchingSpecies] = useState(false);
  const [fetchedSpecies, setFetchedSpecies] = useState<Specie[]>([]);

  useEffect(() => {
    fetchAllSpecies().then((data) => {
      setFetchedSpecies(data);
      setIsFetchingSpecies(true);
    });
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
