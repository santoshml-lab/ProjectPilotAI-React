import { useState } from "react";

export default function DatabaseGenerator() {

  const [form, setForm] = useState({
    project_name: "",
    database_type: "",
    description: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const [loading, setLoading] = useState(false);
const [result, setResult] = useState("");

async function handleSubmit(e) {

  e.preventDefault();

  setLoading(true);
  setResult("");

  try {

    const response = await fetch(
      "https://projectpilotlession.onrender.com/generate-database",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.detail);
      setLoading(false);
      return;
    }

    setResult(data.result);

  } catch (err) {

    alert("Backend Connection Failed");

  }

  setLoading(false);

}
    

  return (

    <div className="main">

      <h1>🗄 Database Generator</h1>

      <form
        className="project-form"
        onSubmit={handleSubmit}
      >

        <input
          name="project_name"
          placeholder="Project Name"
          value={form.project_name}
          onChange={handleChange}
        />

        <select
          name="database_type"
          value={form.database_type}
          onChange={handleChange}
        >

          <option value="">
            Select Database
          </option>

          <option>MySQL</option>

          <option>PostgreSQL</option>

          <option>MongoDB</option>

          <option>SQLite</option>

        </select>

        <textarea
          rows="8"
          name="description"
          placeholder="Describe your project..."
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">

          🚀 Generate Database

        </button>

      </form>

    </div>

  );

}
