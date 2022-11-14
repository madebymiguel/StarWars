import { useEffect, useMemo, useState } from "react";
import GridItem from "./GridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllStarShips from "../apis/fetchAllStarShips";
import { StarShip } from "../types/StarShip";
import "../scss/Grid.scss";

export default function StarShipGrid() {
  const [isFetchingStarShips, setIsFetchingStarShips] = useState(false);
  const [fetchedStarShips, setFetchedStarShips] = useState<StarShip[]>([]);

  useEffect(() => {
    fetchAllStarShips().then(async (data) => {
      setFetchedStarShips(data);
    });

    setIsFetchingStarShips(true);
  }, []);

  const starShipGridItems = useMemo(() => {
    return fetchedStarShips.map((starShip: StarShip) => {
      if (!starShip.detail) {
        return (
          <GridItem
            key={starShip.url}
            name={starShip.name}
            url={starShip.url}
          />
        );
      }
    });
  }, [fetchedStarShips]);

  return (
    <div className="grid-container">
      {isFetchingStarShips ? (
        <div className="grid">{starShipGridItems}</div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}
