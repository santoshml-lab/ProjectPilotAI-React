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

  function handleChange(e) {

    setProject({

      ...project,

      [e.target.name]: e.target.value

    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    console.log(project);

    alert("✅ Form Ready");

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

          🚀 Generate Project

        </button>

      </form>

    </div>

  );

}

