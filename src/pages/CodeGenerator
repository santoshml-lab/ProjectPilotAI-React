import { useState } from "react";

export default function CodeGenerator() {

  const [form, setForm] = useState({
    project_name: "",
    language: "",
    framework: "",
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
        "https://projectpilotlession.onrender.com/generate-code",
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

    } catch {

      alert("Backend Connection Failed");

    }

    setLoading(false);

  }

  return (

    <div className="main">

      <h1>💻 Code Generator</h1>

      <form
        className="project-form"
        onSubmit={handleSubmit}
      >

        <input
          name="project_name"
          placeholder="Project Name"
          value={form.project_name}
          onChange={handleChange}
        />

        <select
          name="language"
          value={form.language}
          onChange={handleChange}
        >
          <option value="">Select Language</option>
          <option>Python</option>
          <option>JavaScript</option>
          <option>Java</option>
          <option>C++</option>
        </select>

        <select
          name="framework"
          value={form.framework}
          onChange={handleChange}
        >
          <option value="">Select Framework</option>
          <option>React</option>
          <option>FastAPI</option>
          <option>Node.js</option>
          <option>Django</option>
        </select>

        <textarea
          rows="8"
          name="description"
          placeholder="Describe your project..."
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">
          🚀 Generate Code
        </button>

      </form>

      {loading && <h3>🤖 Generating Code...</h3>}

      {result && (

        <div className="result-box">

          <h2>Generated Code</h2>

          <pre>{result}</pre>

        </div>

      )}

    </div>

  );

}
