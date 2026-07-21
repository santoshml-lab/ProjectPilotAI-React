export default function NewProject() {

  return (

    <div className="main">

      <h1>🤖 AI Project Generator</h1>

      <form className="project-form">

        <input
          type="text"
          placeholder="Project Name"
        />

        <select>
          <option>Choose Project Type</option>
          <option>Web App</option>
          <option>Mobile App</option>
          <option>AI Project</option>
          <option>Dashboard</option>
        </select>

        <input
          type="text"
          placeholder="Frontend (React, Vue...)"
        />

        <input
          type="text"
          placeholder="Backend (FastAPI, Node...)"
        />

        <input
          type="text"
          placeholder="Database"
        />

        <textarea
          rows="6"
          placeholder="Project Description"
        ></textarea>

        <button type="submit">
          🚀 Generate Project
        </button>

      </form>

    </div>

  );

}
