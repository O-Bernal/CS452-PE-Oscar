import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CitiesList from "./components/CitiesList";
import AddCity from "./components/AddCity";
import CityDetails from "./components/CityDetails";
import { useState } from "react";

function App() {
  const [cities, setCities] = useState([
    { id: 1, name: "Seattle", country: "USA", population: "733,919" }
  ]);

  return (
    <Router>
      <NavBar />
      <Routes>

        {/* Cities List with nested City Details */}
        <Route
          path="/cities"
          element={<CitiesList cities={cities} />}
        >
          <Route
            path=":cityId"
            element={<CityDetails cities={cities} />}
          />
        </Route>

        {/* Add City */}
        <Route
          path="/add-city"
          element={<AddCity cities={cities} setCities={setCities} />}
        />

        {/* Default route */}
        <Route path="*" element={<CitiesList cities={cities} />} />

      </Routes>
    </Router>
  );
}

export default App;
