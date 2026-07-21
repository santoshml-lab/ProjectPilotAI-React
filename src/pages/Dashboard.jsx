import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {

  return (

    <>

      <Sidebar />

      <div className="main">

        <Navbar />

        <h1>👋 Welcome Back</h1>

        <p>
          Build amazing software projects with AI.
        </p>

      </div>

    </>

  );

}
