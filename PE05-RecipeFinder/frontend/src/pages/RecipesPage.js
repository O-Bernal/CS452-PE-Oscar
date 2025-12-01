import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const API_BASE = "https://verbose-potato-vx7p66977jf9p5-5050.app.github.dev";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams(); // used only to know if a recipe is selected

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch(`${API_BASE}/recipes`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        console.error(err);
        alert("Failed to load recipes. Please check if the backend is running.");
      }
    }
    fetchRecipes();
  }, []);

  async function handleDelete(recipeId) {
    if (!window.confirm("Delete this recipe?")) return;
    try {
      const res = await fetch(`${API_BASE}/recipes/${recipeId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
      setRecipes((prev) => prev.filter((r) => r._id !== recipeId));
    } catch (err) {
      console.error(err);
      alert("Failed to delete recipe.");
    }
  }

  return (
    <div className="recipes-layout">
      {/* LEFT: list */}
      <section className="recipes-list-panel">
        <h1>Recipe List</h1>
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li key={recipe._id} className="recipe-item">
              <span className="recipe-name">
                <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
              </span>
              <span className="recipe-actions">
                <Link
                  to={`/recipes/${recipe._id}/edit`}
                  className="btn btn-link"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(recipe._id)}
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* RIGHT: details */}
      <section className="recipes-details-panel">
        {id ? (
          <Outlet />
        ) : (
          <p>Select a recipe from the list to view details.</p>
        )}
      </section>
    </div>
  );
}
