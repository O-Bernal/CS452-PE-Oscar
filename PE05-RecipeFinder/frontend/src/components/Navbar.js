import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/recipes">Recipe List</NavLink>
      <NavLink to="/recipes/add">Add Recipe</NavLink>
    </nav>
  );
}
