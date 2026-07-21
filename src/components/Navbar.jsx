import { useNavigate } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export default function Navbar() {

  const navigate = useNavigate();

  return (

    <header className="navbar">

      <h2>🚀 ProjectPilot AI</h2>

      <div style={{ display: "flex", gap: "15px" }}>

        <button
          className="new-btn"
          onClick={() => navigate("/newproject")}
        >
          + New Project
        </button>

        <LogoutButton />

      </div>

    </header>

  );

}
