import { Routes, Route } from "react-router-dom";

function Dashboard() {
  return <h1>🚀 Dashboard</h1>;
}

function Login() {
  return <h1>🔐 Login Page</h1>;
}

function Signup() {
  return <h1>📝 Signup Page</h1>;
}

function NewProject() {
  return <h1>🤖 New Project</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/newproject" element={<NewProject />} />
    </Routes>
  );
}
