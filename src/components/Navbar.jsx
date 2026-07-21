import LogoutButton from "./LogoutButton";

export default function Navbar() {

  return (

    <header className="navbar">

      <h2>🚀 ProjectPilot AI</h2>

      <div style={{display:"flex",gap:"15px"}}>

        <button className="new-btn">
          + New Project
        </button>

        <LogoutButton/>

      </div>

    </header>

  );

}
