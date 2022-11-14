import { useEffect, useState } from "react";
import { useParams } from "react-router";
import StarShipInfoCard from "./StarShipInfoCard";
import LoadingComponent from "./LoadingComponent";
import fetchStarShip from "../apis/fetchStarShip";
import fetchFromURLArray from "../apis/fetchFromURLArray";
import { StarShip } from "../types/StarShip";
import { Film } from "../types/Film";
import { People } from "../types/People";

export default function StarShipInfoCardWithQuery() {
  const [starShips, setStarShips] = useState<StarShip | null>(null);
  const [pilots, setPilots] = useState<People[] | null>(null);
  const [films, setFilms] = useState<Film[] | null>(null);

  const [finishedFetching, setFinishedFetching] = useState(false);
  const { index } = useParams();

  useEffect(() => {
    if (index) {
      fetchStarShip(index).then((starShipData) => {
        setStarShips(starShipData);
        fetchFromURLArray(starShipData.pilots).then((pilots: People[]) => {
          setPilots(pilots);
        });
        fetchFromURLArray(starShipData.films).then((films: Film[]) => {
          setFilms(films);
        });
      });
      setFinishedFetching(true);
    }
  }, []);

  return (
    <>
      {finishedFetching ? (
        starShips !== null &&
        pilots !== null &&
        films !== null && (
          <StarShipInfoCard
            name={starShips.name}
            model={starShips.model}
            manufacturer={starShips.manufacturer}
            cost_in_credits={starShips.cost_in_credits}
            length={starShips.length}
            max_atmosphering_speed={starShips.max_atmosphering_speed}
            crew={starShips.crew}
            passengers={starShips.passengers}
            cargo_capacity={starShips.cargo_capacity}
            consumables={starShips.consumables}
            hyperdrive_rating={starShips.hyperdrive_rating}
            MGLT={starShips.MGLT}
            starship_class={starShips.starship_class}
            pilots={pilots}
            films={films}
          />
        )
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
