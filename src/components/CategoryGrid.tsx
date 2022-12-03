import { useMemo } from "react";
import CategoryGridItem from "./CategoryGridItem";
import "../scss/Category.scss";
import planetImage from "../assets/planet.jpg";
import personImage from "../assets/person.jpg";
import filmImage from "../assets/film.jpg";
import starShipImage from "../assets/starShip.jpg";
import vehicleImage from "../assets/vehicle.jpg";
import speciesImage from "../assets/species.jpg";

export default function CategoryGrid() {
  const categories = [
    { name: "planets", image: planetImage },
    { name: "people", image: personImage },
    { name: "films", image: filmImage },
    { name: "starships", image: starShipImage },
    { name: "vehicles", image: vehicleImage },
    { name: "species", image: speciesImage },
  ];

  const categoryGridItems = useMemo(() => {
    return categories.map((category: { name: string; image: string }) => {
      return (
        <CategoryGridItem
          key={category.name}
          categoryName={category.name}
          categoryImage={category.image}
        />
      );
    });
  }, []);

  return <div className="category-container">{categoryGridItems}</div>;
}
