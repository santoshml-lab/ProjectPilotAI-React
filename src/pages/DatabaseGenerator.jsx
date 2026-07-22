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

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);

    alert("🚀 Database Generator Ready");
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
