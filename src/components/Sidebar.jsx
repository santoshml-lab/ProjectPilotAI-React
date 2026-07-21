import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <aside className="sidebar">

      <h2>🚀 ProjectPilot AI</h2>

      <nav>

        <Link to="/dashboard">🏠 Dashboard</Link>

        <Link to="/newproject">🤖 AI Generator</Link>

        <Link to="/dashboard">📁 My Projects</Link>

        <Link to="/dashboard">🗄 Database Generator</Link>

        <Link to="/dashboard">⚙ API Generator</Link>

        <Link to="/dashboard">💻 Code Generator</Link>

        <Link to="/dashboard">📄 README Generator</Link>

        <Link to="/">🚪 Logout</Link>

      </nav>

    </aside>

  );

}
