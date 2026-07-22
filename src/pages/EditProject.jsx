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

    </div>

  );

}
