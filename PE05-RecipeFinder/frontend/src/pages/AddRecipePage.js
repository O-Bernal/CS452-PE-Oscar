import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = "https://verbose-potato-vx7p66977jf9p5-5050.app.github.dev";

export default function AddRecipePage() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    notes: "",
  });
  const navigate = useNavigate();

  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await fetch(`${API_BASE}/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    navigate("/recipes");
  }

  return (
    <div>
      <h1>Add Recipe</h1>
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
          Notes (optional)<br />
          <textarea
            rows="3"
            value={form.notes}
            onChange={(e) => updateForm({ notes: e.target.value })}
          />
        </label>
        <br /><br />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
