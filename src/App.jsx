import { Routes, Route } from "react-router-dom";
import EditProject from "./pages/EditProject";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NewProject from "./pages/NewProject";
import ProtectedRoute from "./components/ProtectedRoute";
import ProjectDetails from "./pages/ProjectDetails";
import DatabaseGenerator from "./pages/DatabaseGenerator";
import ApiGenerator from "./pages/ApiGenerator";
import CodeGenerator from "./pages/CodeGenerator";
import ReadmeGenerator from "./pages/ReadmeGenerator";

export default function App() {

  return (

    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/newproject"
        element={
          <ProtectedRoute>
            <NewProject />
          </ProtectedRoute>
        }
      />

      <Route
  path="/project/:id"
  element={
    <ProtectedRoute>
      <ProjectDetails />
    </ProtectedRoute>
  }
/>
      <Route
  path="/edit/:id"
  element={
    <ProtectedRoute>
      <EditProject />
    </ProtectedRoute>
  }
/>
      <Route
  path="/database"
  element={
    <ProtectedRoute>
      <DatabaseGenerator />
    </ProtectedRoute>
  }
/>
      <Route
  path="/api"
  element={
    <ProtectedRoute>
      <ApiGenerator />
    </ProtectedRoute>
  }
/>
      <Route
  path="/code"
  element={
    <ProtectedRoute>
      <CodeGenerator />
    </ProtectedRoute>
  }
/>

   <Route
  path="/readme"
  element={
    <ProtectedRoute>
      <ReadmeGenerator />
    </ProtectedRoute>
  }
/>   
      
      

    </Routes>

  );

}
