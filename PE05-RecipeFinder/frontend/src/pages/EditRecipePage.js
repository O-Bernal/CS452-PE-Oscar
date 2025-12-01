import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_BASE = "https://verbose-potato-vx7p66977jf9p5-5050.app.github.dev";

export default function EditRecipePage() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    notes: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${API_BASE}/recipes/${id}`);
      const data = await res.json();
      setForm({
        name: data.name || "",
        ingredients: data.ingredients || "",
        instructions: data.instructions || "",
        notes: data.notes || "",
      });
    }
    fetchRecipe();
  }, [id]);

  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`${API_BASE}/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    navigate("/recipes");
  }

  return (
    <div>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name<br />
          <input
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            required
          />
        </label>
        <br /><br />
        <label>
          Ingredients<br />
          <textarea
            rows="4"
            value={form.ingredients}
            onChange={(e) => updateForm({ ingredients: e.target.value })}
            required
          />
        </label>
        <br /><br />
        <label>
          Instructions<br />
          <textarea
            rows="6"
            value={form.instructions}
            onChange={(e) => updateForm({ instructions: e.target.value })}
            required
          />
        </label>
        <br /><br />
        <label>
          Notes<br />
          <textarea
            rows="3"
            value={form.notes}
            onChange={(e) => updateForm({ notes: e.target.value })}
          />
        </label>
        <br /><br />
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
}
