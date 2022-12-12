import { useEffect, useMemo, useState } from "react";
import GridItem from "./GridItem";
import LoadingComponent from "./LoadingComponent";
import fetchAllStarShips from "../apis/fetchAllStarShips";
import { StarShip } from "../types/StarShip";
import setGridFromSessionStorage from "../utils/setGridSessionStorage";
import getGridFromSessionStorage from "../utils/getGridSessionStorage";
import "../scss/Grid.scss";

export default function StarShipGrid() {
  const [isFetchingStarShips, setIsFetchingStarShips] = useState(false);
  const [fetchedStarShips, setFetchedStarShips] = useState<StarShip[]>([]);

  const sessionKey = "starShips";
  const getStarShipSession = getGridFromSessionStorage(sessionKey);

  useEffect(() => {
    if (getStarShipSession === null) {
      fetchAllStarShips().then(async (data) => {
        setGridFromSessionStorage(sessionKey, data);
        setFetchedStarShips(data);
        setIsFetchingStarShips(true);
      });
    } else {
      const gridData = getGridFromSessionStorage(sessionKey);
      if (gridData) {
        setFetchedStarShips(gridData);
        setIsFetchingStarShips(true);
      }
    }
  }, []);

  const starShipGridItems = useMemo(() => {
    return fetchedStarShips.map((starShip: StarShip) => {
      return (
        <GridItem key={starShip.url} name={starShip.name} url={starShip.url} />
      );
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
