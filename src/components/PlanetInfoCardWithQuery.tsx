import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PlanetInfoCard from "./PlanetInfoCard";
import LoadingComponent from "./LoadingComponent";
import fetchPlanet from "../apis/fetchPlanet";
import fetchFromURLArray from "../apis/fetchFromURLArray";
import { Planet } from "../types/Planet";
import { People } from "../types/People";
import { Film } from "../types/Film";

export default function PlanetInfoCardWithQuery() {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [residents, setResidents] = useState<People[] | null>(null);
  const [films, setFilms] = useState<Film[] | null>(null);

  const [finishedFetching, setFinishedFetching] = useState(false);
  const { index } = useParams();

  useEffect(() => {
    if (index) {
      fetchPlanet(index).then((planetData) => {
        setPlanet(planetData);
        fetchFromURLArray(planetData.residents).then((residents: People[]) => {
          setResidents(residents);
        });
        fetchFromURLArray(planetData.films).then((films: Film[]) => {
          setFilms(films);
        });
        setFinishedFetching(true);
      });
    }
  }, []);

  return (
    <>
      {finishedFetching ? (
        planet !== null &&
        residents !== null &&
        films !== null && (
          <PlanetInfoCard
            name={planet.name}
            rotation_period={planet.rotation_period}
            orbital_period={planet.orbital_period}
            diameter={planet.diameter}
            climate={planet.climate}
            gravity={planet.gravity}
            terrain={planet.terrain}
            surface_water={planet.surface_water}
            population={planet.population}
            residents={residents}
            films={films}
          />
        )
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
