import bb8 from "../assets/BB8.png";
import "../scss/Loading.scss";

export default function LoadingComponent() {
  return (
    <div className="loading-container">
      <img className="loading-img" src={bb8} alt="pokeball loading" />
    </div>
  );
}
