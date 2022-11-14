import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PeopleInfoCard from "./PeopleInfoCard";
import LoadingComponent from "./LoadingComponent";
import fetchPeople from "../apis/fetchPeople";
import fetchFromURLArray from "../apis/fetchFromURLArray";
import fetchFromURL from "../apis/fetchFromURL";
import { Planet } from "../types/Planet";
import { People } from "../types/People";
import { Film } from "../types/Film";
import { Specie } from "../types/Specie";
import { Vehicle } from "../types/Vehicle";
import { StarShip } from "../types/StarShip";

export default function PeopleInfoCardWithQuery() {
  const [people, setPeople] = useState<People | null>(null);
  const [homeWorld, setHomeWorld] = useState<Planet | null>(null);
  const [films, setFilms] = useState<Film[] | null>(null);
  const [species, setSpecies] = useState<Specie[] | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[] | null>(null);
  const [starShips, setStarShips] = useState<StarShip[] | null>(null);

  const [finishedFetching, setFinishedFetching] = useState(false);
  const { index } = useParams();

  useEffect(() => {
    if (index) {
      fetchPeople(index).then((peopleData) => {
        setPeople(peopleData);
        fetchFromURL(peopleData.homeworld).then((homeWorld: Planet) => {
          setHomeWorld(homeWorld);
        });
        fetchFromURLArray(peopleData.films).then((films: Film[]) => {
          setFilms(films);
        });
        fetchFromURLArray(peopleData.species).then((species: Specie[]) => {
          setSpecies(species);
        });
        fetchFromURLArray(peopleData.vehicles).then((vehicles: Vehicle[]) => {
          setVehicles(vehicles);
        });
        fetchFromURLArray(peopleData.starships).then(
          (starShips: StarShip[]) => {
            setStarShips(starShips);
          }
        );
        setFinishedFetching(true);
      });
    }
  }, []);

  return (
    <>
      {finishedFetching ? (
        people !== null &&
        films !== null &&
        homeWorld !== null &&
        species !== null &&
        vehicles !== null &&
        starShips !== null && (
          <PeopleInfoCard
            name={people.name}
            height={people.height}
            mass={people.mass}
            hair_color={people.hair_color}
            skin_color={people.skin_color}
            eye_color={people.eye_color}
            birth_year={people.birth_year}
            gender={people.gender}
            homeworld={homeWorld}
            films={films}
            species={species}
            vehicles={vehicles}
            starships={starShips}
          />
        )
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
