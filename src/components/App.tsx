import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Carousel from "./Carousel";
import PlanetGrid from "./PlanetGrid";
import PeopleGrid from "./PeopleGrid";
import FilmGrid from "./FilmsGrid";
import StarShipGrid from "./StarShipGrid";
import VehicleGrid from "./VehicleGrid";
import SpecieGrid from "./SpecieGrid";

import "../scss/App.scss";

export default function App() {
  return (
    <Router>
      <div id="page">
        <Header />
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="/planets">
            <Route index element={<PlanetGrid />} />
          </Route>

          <Route path="/people">
            <Route index element={<PeopleGrid />} />
          </Route>

          <Route path="/films">
            <Route index element={<FilmGrid />} />
          </Route>

          <Route path="/starships">
            <Route index element={<StarShipGrid />} />
          </Route>

          <Route path="/vehicles">
            <Route index element={<VehicleGrid />} />
          </Route>

          <Route path="/species">
            <Route index element={<SpecieGrid />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
