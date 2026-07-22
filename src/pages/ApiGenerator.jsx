import { useState } from "react";
import "../styles/newproject.css";

export default function ApiGenerator() {

  const [form, setForm] = useState({
    project_name: "",
    backend: "",
    authentication: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
  async function handleSubmit(e) {

  e.preventDefault();

  setLoading(true);
  setResult("");

  try {

    const response = await fetch(
      "https://projectpilotlession.onrender.com/generate-api",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.detail);
      setLoading(false);
      return;
    }

    setResult(data.result);

  } catch (err) {

    alert("❌ Backend Connection Failed");

  }

  setLoading(false);

  }

  return (
    <div className="main">

  <h1>⚙ API Generator</h1>

  <form className="project-form">

    <input
      name="project_name"
      placeholder="Project Name"
    />

    <select name="backend">

      <option value="">Select Backend</option>

      <option>FastAPI</option>

      <option>Node.js + Express</option>

      <option>Django</option>

      <option>Spring Boot</option>

    </select>

    <select name="authentication">

      <option value="">Authentication</option>

      <option>JWT</option>

      <option>OAuth</option>

      <option>Session</option>

      <option>None</option>

    </select>

    <textarea
      rows="8"
      name="description"
      placeholder="Describe your API..."
    />

    <button type="submit">
      🚀 Generate API
    </button>

  </form>

</div>
  );

}

