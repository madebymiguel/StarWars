import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import CategoryGrid from "./CategoryGrid";
import PlanetGrid from "./PlanetGrid";
import PeopleGrid from "./PeopleGrid";
import FilmGrid from "./FilmsGrid";
import StarShipGrid from "./StarShipGrid";
import VehicleGrid from "./VehicleGrid";
import SpecieGrid from "./SpecieGrid";
import PlanetInfoCardWithQuery from "./PlanetInfoCardWithQuery";
import PeopleInfoCardWithQuery from "./PeopleInfoCardWithQuery";
import FilmInfoCardWithQuery from "./FilmInfoCardWithQuery";
import StarShipInfoCardWithQuery from "./StarShipInfoCardWithQuery";
import VehicleInfoCardWithQuery from "./VehicleInfoCardWithQuery";
import SpecieInfoCardWithQuery from "./SpecieInfoCardWithQuery";
import "../scss/App.scss";

export default function App() {
  return (
    <Router>
      <div id="page">
        <Header />
        <Routes>
          <Route path="/" element={<CategoryGrid />} />
          <Route path="/planets">
            <Route index element={<PlanetGrid />} />
            <Route path=":index" element={<PlanetInfoCardWithQuery />} />
          </Route>

          <Route path="/people">
            <Route index element={<PeopleGrid />} />
            <Route path=":index" element={<PeopleInfoCardWithQuery />} />
          </Route>

          <Route path="/films">
            <Route index element={<FilmGrid />} />
            <Route path=":index" element={<FilmInfoCardWithQuery />} />
          </Route>

          <Route path="/starships">
            <Route index element={<StarShipGrid />} />
            <Route path=":index" element={<StarShipInfoCardWithQuery />} />
          </Route>

          <Route path="/vehicles">
            <Route index element={<VehicleGrid />} />
            <Route path=":index" element={<VehicleInfoCardWithQuery />} />
          </Route>

          <Route path="/species">
            <Route index element={<SpecieGrid />} />
            <Route path=":index" element={<SpecieInfoCardWithQuery />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
