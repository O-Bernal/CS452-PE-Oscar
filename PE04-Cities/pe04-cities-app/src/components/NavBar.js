import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>Cities Application</h1>
      <div className="nav-links">
        <Link to="/cities">Cities List</Link>
        <Link to="/add-city">Add City</Link>
      </div>
    </nav>
  );
}
