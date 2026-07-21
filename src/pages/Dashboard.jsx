import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    async function loadProjects() {

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setProjects(data);
      } else {
        console.log(error);
      }

    }

    loadProjects();

  }, []);

  return (

    <>

      <Sidebar />

      <div className="main">

        <Navbar />

        {/* HERO */}

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

        {/* STATS */}

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

        {/* QUICK ACTIONS */}

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

        {/* PROJECT HISTORY */}

        <section className="recent-projects">

          <h2>📁 Project History</h2>

          <div className="projects-grid">

            {projects.length === 0 ? (

              <div className="project-card">

                <h3>No Projects Yet</h3>

                <p>Create your first AI project.</p>

              </div>

            ) : (

              projects.map((item) => (

                <div className="project-card" key={item.id}>

                  <h3>{item.project_name}</h3>

                  <p>{item.frontend} + {item.backend}</p>

                  <button
                  onClick={() => navigate(`/project/${item.id}`)}
                 >
                  Open
                  </button>

                </div>

              ))

            )}

          </div>

        </section>

      </div>

    </>

  );

}

        
