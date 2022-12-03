import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import "../scss/Category.scss";

export interface CategoryGridItemProps {
  categoryName: string;
  categoryImage: string;
}

export default function CategoryGridItem({
  categoryName,
  categoryImage,
}: CategoryGridItemProps) {
  const categoryPath = "/" + categoryName;
  return (
    <Link to={categoryPath} className="link">
      <Tilt>
        <div className="category-item">
          <h2 className="title">{categoryName.toUpperCase()}</h2>
          <img src={categoryImage} alt="image" className="image" />
        </div>
      </Tilt>
    </Link>
  );
}
