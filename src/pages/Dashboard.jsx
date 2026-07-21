import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {

  return (

    <>

      <Sidebar />

      <div className="main">

        <Navbar />

        <section className="hero">

          <h1>🚀 Welcome to ProjectPilot AI</h1>

          <p>
            Generate complete Full Stack Projects,
            Database Schemas, APIs and AI Code instantly.
          </p>

          <button className="hero-btn">
            Start Building
          </button>

        </section>

        <section className="stats">

          <div className="card">

            <h2>28</h2>

            <p>Projects</p>

          </div>

          <div className="card">

            <h2>154</h2>

            <p>AI Requests</p>

          </div>

          <div className="card">

            <h2>12</h2>

            <p>Deployments</p>

          </div>

          <div className="card">

            <h2>98%</h2>

            <p>Success Rate</p>

          </div>

        </section>

        {/* ========================= */}
        {/* QUICK ACTIONS */}
        {/* ========================= */}

        <section className="quick-actions">

          <h2>⚡ Quick Actions</h2>

          <div className="actions-grid">

            <div className="action-card">
              <h3>🤖 AI Generator</h3>
              <p>Create complete software projects.</p>
              <button>Open</button>
            </div>

            <div className="action-card">
              <h3>🗄 Database</h3>
              <p>Generate SQL database schema.</p>
              <button>Open</button>
            </div>

            <div className="action-card">
              <h3>⚙ API Generator</h3>
              <p>Create REST APIs instantly.</p>
              <button>Open</button>
            </div>

            <div className="action-card">
              <h3>💻 Code Generator</h3>
              <p>Generate HTML CSS React Node.</p>
              <button>Open</button>
            </div>

            <div className="action-card">
              <h3>📄 README</h3>
              <p>Create professional GitHub README.</p>
              <button>Open</button>
            </div>

            <div className="action-card">
              <h3>🚀 Deploy</h3>
              <p>Deploy to Vercel & Render.</p>
              <button>Open</button>
            </div>

          </div>

        </section>

      </div>
      {/* ========================= */}
{/* RECENT PROJECTS */}
{/* ========================= */}

<section className="recent-projects">

  <h2>📁 Recent Projects</h2>

  <div className="projects-grid">

    <div className="project-card">
      <h3>🚀 ProjectPilot AI</h3>
      <p>React + Node.js + Supabase</p>
      <button>Open</button>
    </div>

    <div className="project-card">
      <h3>🛒 E-Commerce App</h3>
      <p>MERN Stack</p>
      <button>Open</button>
    </div>

    <div className="project-card">
      <h3>🤖 AI Resume Analyzer</h3>
      <p>FastAPI + React</p>
      <button>Open</button>
    </div>

  </div>

</section>

    </>

  );

}
