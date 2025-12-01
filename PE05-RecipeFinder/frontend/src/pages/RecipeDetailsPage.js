import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE = "https://verbose-potato-vx7p66977jf9p5-5050.app.github.dev";

export default function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(`${API_BASE}/recipes/${id}`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        console.error(err);
        alert("Failed to load recipe details.");
      } finally {
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>

      <h3>Ingredients</h3>
      <pre>{recipe.ingredients}</pre>

      <h3>Instructions</h3>
      <pre>{recipe.instructions}</pre>

      {recipe.notes && (
        <>
          <h3>Notes</h3>
          <p>{recipe.notes}</p>
        </>
      )}
    </div>
  );
}
