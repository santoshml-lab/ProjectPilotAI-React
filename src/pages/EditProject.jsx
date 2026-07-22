import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

export default function EditProject() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [project, setProject] = useState({
    project_name: "",
    description: ""
  });

  useEffect(() => {

    async function loadProject() {

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.log(error);
        return;
      }

      setProject(data);

    }

    loadProject();

  }, [id]);

  return (

  <div className="main">

    <h1>✏ Edit Project</h1>

    <form
      className="project-form"
      onSubmit={async (e) => {

        e.preventDefault();

        const { error } = await supabase
          .from("projects")
          .update({
            project_name: project.project_name,
            description: project.description
          })
          .eq("id", id);

        if (error) {

          alert(error.message);

          return;

        }

        alert("✅ Project Updated Successfully");

        navigate("/dashboard");

      }}
    >

      <input
        value={project.project_name}
        onChange={(e) =>
          setProject({
            ...project,
            project_name: e.target.value
          })
        }
        placeholder="Project Name"
      />

      <textarea
        rows="8"
        value={project.description}
        onChange={(e) =>
          setProject({
            ...project,
            description: e.target.value
          })
        }
        placeholder="Description"
      />

      <button type="submit">
        💾 Save Changes
      </button>

    </form>

  </div>

);
  }

    
