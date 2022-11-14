import { useEffect, useState } from "react";
import { useParams } from "react-router";
import FilmInfoCard from "./FilmInfoCard";
import LoadingComponent from "./LoadingComponent";
import fetchFilm from "../apis/fetchFilm";
import fetchFromURLArray from "../apis/fetchFromURLArray";
import { Film } from "../types/Film";
import { People } from "../types/People";
import { Planet } from "../types/Planet";
import { StarShip } from "../types/StarShip";
import { Vehicle } from "../types/Vehicle";
import { Specie } from "../types/Specie";

export default function FilmInfoCardWithQuery() {
  const [film, setFilm] = useState<Film | null>(null);
  const [characters, setCharacters] = useState<People[] | null>(null);
  const [planets, setPlanets] = useState<Planet[] | null>(null);
  const [starships, setStarShips] = useState<StarShip[] | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[] | null>(null);
  const [species, setSpecies] = useState<Specie[] | null>(null);

  const [finishedFetching, setFinishedFetching] = useState(false);
  const { index } = useParams();

  useEffect(() => {
    if (index) {
      fetchFilm(index).then((filmData) => {
        setFilm(filmData);
        fetchFromURLArray(filmData.characters).then((characters: People[]) => {
          setCharacters(characters);
        });
        fetchFromURLArray(filmData.planets).then((planets: Planet[]) => {
          setPlanets(planets);
        });
        fetchFromURLArray(filmData.starships).then((starShips: StarShip[]) => {
          setStarShips(starShips);
        });
        fetchFromURLArray(filmData.vehicles).then((vehicles: Vehicle[]) => {
          setVehicles(vehicles);
        });
        fetchFromURLArray(filmData.species).then((species: Specie[]) => {
          setSpecies(species);
        });
        setFinishedFetching(true);
      });
    }
  }, []);

  return (
    <>
      {finishedFetching ? (
        film !== null &&
        characters !== null &&
        planets !== null &&
        starships !== null &&
        vehicles !== null &&
        species !== null && (
          <FilmInfoCard
            title={film.title}
            episode_id={film.episode_id}
            opening_crawl={film.opening_crawl}
            director={film.director}
            producer={film.producer}
            release_date={film.release_date}
            characters={characters}
            planets={planets}
            starships={starships}
            vehicles={vehicles}
            species={species}
          />
        )
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
