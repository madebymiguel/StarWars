import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SpecieInfoCard from "./SpecieInfoCard";
import LoadingComponent from "./LoadingComponent";
import fetchSpecie from "../apis/fetchSpecie";
import fetchFromURL from "../apis/fetchFromURL";
import fetchFromURLArray from "../apis/fetchFromURLArray";
import { Planet } from "../types/Planet";
import { People } from "../types/People";
import { Film } from "../types/Film";
import { Specie } from "../types/Specie";

export default function PlanetInfoCardWithQuery() {
  const [specie, setSpecie] = useState<Specie | null>(null);
  const [homeWorld, setHomeWorld] = useState<Planet | null>(null);
  const [people, setPeople] = useState<People[] | null>(null);
  const [films, setFilms] = useState<Film[] | null>(null);

  const [finishedFetching, setFinishedFetching] = useState(false);
  const { index } = useParams();

  useEffect(() => {
    if (index) {
      fetchSpecie(index).then((specieData) => {
        setSpecie(specieData);
        fetchFromURL(specieData.homeworld).then((homeWorld: Planet) => {
          setHomeWorld(homeWorld);
        });
        fetchFromURLArray(specieData.people).then((people: People[]) => {
          setPeople(people);
        });
        fetchFromURLArray(specieData.films).then((films: Film[]) => {
          setFilms(films);
        });
      });
      setFinishedFetching(true);
    }
  }, []);

  return (
    <>
      {finishedFetching ? (
        specie !== null &&
        homeWorld !== null &&
        people !== null &&
        films !== null && (
          <SpecieInfoCard
            name={specie.name}
            classification={specie.classification}
            designation={specie.designation}
            average_height={specie.average_height}
            skin_colors={specie.skin_colors}
            hair_colors={specie.hair_colors}
            eye_colors={specie.eye_colors}
            average_lifespan={specie.average_lifespan}
            homeworld={homeWorld}
            language={specie.language}
            people={people}
            films={films}
          />
        )
      ) : (
        <LoadingComponent />
      )}
    </>
  );
}
