import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCity({ cities, setCities }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    country: "",
    population: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newCity = {
      id: cities.length + 1,
      ...form
    };

    setCities([...cities, newCity]);

    // redirect
    navigate("/cities");
  }

  return (
    <div className="page">
      <h2>Add City</h2>

      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input name="name" value={form.name} onChange={handleChange} />

        <p>Country:</p>
        <input name="country" value={form.country} onChange={handleChange} />

        <p>Population:</p>
        <input name="population" value={form.population} onChange={handleChange} />

        <button>Add City</button>
      </form>
    </div>
  );
}
