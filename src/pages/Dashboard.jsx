import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

import { supabase } from "../services/supabase";


export default function Dashboard() {

  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  async function deleteProject(id) {

    const confirmDelete = window.confirm(
      "Delete this project?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (error) {

      alert(error.message);

      return;

    }

    setProjects((prev) =>
      prev.filter((p) => p.id !== id)
    );

  }

  useEffect(() => {

    async function loadProjects() {

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

      if (error) {

        console.log(error);

        return;

      }

      setProjects(data || []);

    }

    loadProjects();

  }, []);

  return (

    <>

      <Sidebar />

      <div className="main">
        <Navbar />

{/* HERO */}
        
<section className="premium-banner">

  <div className="banner-left">

    <span className="live-badge">
      🚀 AI Powered Platform
    </span>

    <h1>
      Build Complete Software Projects
      <br />
      <span>10x Faster with AI</span>
    </h1>

    <p>
      Generate Full Stack Projects, APIs, Databases,
      Production Code and Documentation —
      all from one intelligent platform.
    </p>

  </div>

  <div className="banner-right">

    <div className="banner-box">
      ⚡ Fast
    </div>

    <div className="banner-box">
      🤖 AI
    </div>

    <div className="banner-box">
      🚀 Deploy
    </div>

  </div>

</section>
        
<section className="hero">

  <h1>🚀 Welcome to ProjectPilot AI</h1>

  <p>
    Generate complete Full Stack Projects,
    Database Schemas, APIs and AI Code instantly.
  </p>

  <button
    className="hero-btn"
    onClick={() => navigate("/newproject")}
  >
    🚀 Start Building
  </button>

</section>

{/* STATS */}

<section className="stats">

  <div className="card">
    <h2>{projects.length}</h2>
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

  <span className="badge">AI Powered</span>

  <h3>🤖 AI Generator</h3>

  <p>
    Generate complete software projects using Artificial Intelligence.
  </p>

  <button
    onClick={() => navigate("/newproject")}
  >
    🚀 Open
  </button>

</div>
  

    <div className="action-card">

  <span className="badge">AI Powered</span>

  <h3>🗄 Database Generator</h3>

  <p>
    Design production-ready database schemas instantly.
  </p>

  <button
    onClick={() => navigate("/database")}
  >
    🚀 Open
  </button>

</div>
  

    <div className="action-card">

  <span className="badge">AI Powered</span>

  <h3>⚙ API Generator</h3>

  <p>
    Generate professional REST APIs with best practices.
  </p>

  <button
    onClick={() => navigate("/api")}
  >
    🚀 Open
  </button>

</div>


    <div className="action-card">

  <span className="badge">AI Powered</span>

  <h3>💻 Code Generator</h3>

  <p>
    Generate production-ready source code using AI.
  </p>

  <button
    onClick={() => navigate("/code")}
  >
    🚀 Open
  </button>

</div>

      

  </div>

</section>
{/* PROJECT HISTORY */}

<section className="recent-projects">

  <h2>📁 Project History</h2>
  <input
  type="text"
  placeholder="🔍 Search Project..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    margin: "20px 0",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    fontSize: "16px"
  }}
/>

  <div className="projects-grid">

    {projects.length === 0 ? (

      <div className="project-card">

        <h3>No Projects Yet</h3>

        <p>Create your first AI project.</p>

      </div>

    ) : (

      projects
  .filter((item) =>
    item.project_name
      .toLowerCase()
      .includes(search.toLowerCase())
  )
  .map((item) => (

        <div className="project-card" key={item.id}>

          <h3>{item.project_name}</h3>
          <p
    style={{
      color:"#60a5fa",
      fontWeight:"600",
      marginBottom:"12px"
    }}
  >
    🚀 AI Generated Project
  </p>

  <p>
    <b>Type:</b> {item.project_type}
  </p>

          <p>
            <b>Type:</b> {item.project_type}
          </p>

          
            

          
  <div
  style={{
    display: "flex",
    gap: "8px",
    marginTop: "15px",
    flexWrap: "wrap"
  }}
>
    
    
    

  <button
    onClick={() => navigate(`/project/${item.id}`)}
  >
    Open
  </button>

  <button
    onClick={() => navigate(`/edit/${item.id}`)}
    style={{
      background: "#2563eb",
      color: "#fff"
    }}
  >
    Edit
  </button>

  <button
    onClick={() => deleteProject(item.id)}
    style={{
      background: "#dc2626",
      color: "#fff"
    }}
  >
    Delete

    
  </button>

</div>
                 
        </div>

      ))

    )}

  </div>

</section>
        
      </div>

    </>

  );

              }


        

  

        
