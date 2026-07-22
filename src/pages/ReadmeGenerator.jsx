import { useState } from "react";

import "../styles/newproject.css";

export default function ReadmeGenerator() {

  const [form, setForm] = useState({
    project_name: "",
    project_type: "",
    tech_stack: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);
    setResult("");

    try {

      const response = await fetch(
        "https://projectpilotlession.onrender.com/generate-readme",
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

    } catch {

      alert("Backend Connection Failed");

    }

    setLoading(false);

  }

  return (

    <div className="main">

      <h1>📄 README Generator</h1>

      <form className="project-form" onSubmit={handleSubmit}>

        <input
          name="project_name"
          placeholder="Project Name"
          value={form.project_name}
          onChange={handleChange}
        />

        <input
          name="project_type"
          placeholder="Project Type"
          value={form.project_type}
          onChange={handleChange}
        />

        <input
          name="tech_stack"
          placeholder="Tech Stack"
          value={form.tech_stack}
          onChange={handleChange}
        />

        <textarea
          rows="8"
          name="description"
          placeholder="Project Description..."
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">
          🚀 Generate README
        </button>

      </form>

      {loading && <h3>🤖 Generating README...</h3>}

      {result && (

        <div className="result-box">

          <h2>Generated README.md</h2>

          <pre>{result}</pre>

        </div>

      )}

    </div>

  );

}
