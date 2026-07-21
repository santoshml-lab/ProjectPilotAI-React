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

      </div>

    </>

  );

}
