import { useParams } from "react-router-dom";

export default function CityDetails({ cities }) {
  const { cityId } = useParams();
  const city = cities.find(c => c.id === Number(cityId));

  if (!city) return <p>No city found.</p>;

  return (
    <div className="city-details">
      <h2>{city.name} Details</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
}
