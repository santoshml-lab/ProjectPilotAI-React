import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../services/supabase";
import "../styles/projectdetails.css";

export default function ProjectDetails() {

  const { id } = useParams();

  const [project, setProject] = useState(null);

  useEffect(() => {

    async function loadProject() {

      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      setProject(data);

    }

    loadProject();

  }, [id]);

  if (!project) {
    return <h2>Loading...</h2>;
  }

  return (

    <div className="main">

      <h1>{project.project_name}</h1>

      <h3>{project.project_type}</h3>

      <p><b>Frontend:</b> {project.frontend}</p>

      <p><b>Backend:</b> {project.backend}</p>

      <p><b>Database:</b> {project.database_name}</p>

      <hr />

      <h2>Description</h2>

      <p>{project.description}</p>

      <hr />

      <h2>AI Result</h2>

      <pre>{project.ai_result}</pre>

    </div>

  );

}
