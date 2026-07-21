import { useState } from "react";

export default function NewProject() {

  const [project, setProject] = useState({
    project_name: "",
    project_type: "",
    frontend: "",
    backend: "",
    database: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  function handleChange(e) {

    setProject({
      ...project,
      [e.target.name]: e.target.value
    });

  }

  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);
    setResult("");

    try {

      const response = await fetch(
        "https://projectpilotlession.onrender.com/generate-project",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(project)

        }
      );

      const data = await response.json();

      if (!response.ok) {

        alert(data.detail || "Something went wrong");

        setLoading(false);
        return;

      }

      setResult(data.result);

    } catch (err) {

      alert("❌ Backend Connection Failed");

      console.log(err);

    }

    setLoading(false);

  }

  return (

    <div className="main">

      <h1>🤖 AI Project Generator</h1>

      <form className="project-form" onSubmit={handleSubmit}>

        <input
          name="project_name"
          placeholder="Project Name"
          value={project.project_name}
          onChange={handleChange}
        />

        <select
          name="project_type"
          value={project.project_type}
          onChange={handleChange}
        >

          <option value="">Choose Project Type</option>

          <option>Web App</option>

          <option>Mobile App</option>

          <option>AI Project</option>

          <option>Dashboard</option>

        </select>

        <input
          name="frontend"
          placeholder="Frontend"
          value={project.frontend}
          onChange={handleChange}
        />

        <input
          name="backend"
          placeholder="Backend"
          value={project.backend}
          onChange={handleChange}
        />

        <input
          name="database"
          placeholder="Database"
          value={project.database}
          onChange={handleChange}
        />

        <textarea
          rows="6"
          name="description"
          placeholder="Project Description"
          value={project.description}
          onChange={handleChange}
        />

        <button type="submit">

          {loading ? "Generating..." : "🚀 Generate Project"}

        </button>

      </form>

      {loading && (
        <h3>🤖 AI is generating your project...</h3>
      )}

      {result && (
        <div className="result-box">

          <h2>Generated Project</h2>

          <pre>{result}</pre>

        </div>
      )}

    </div>

  );

}

