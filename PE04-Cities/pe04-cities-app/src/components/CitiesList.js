import { Link, Outlet } from "react-router-dom";

export default function CitiesList({ cities }) {
  return (
    <div className="page">
      <h2>Cities List</h2>

      {cities.map((city) => (
        <p key={city.id}>
          <Link to={`/cities/${city.id}`}>{city.name}</Link>
        </p>
      ))}

      {/* Nested Route renders here */}
      <Outlet />
    </div>
  );
}
