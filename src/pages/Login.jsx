import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  async function handleLogin(e) {

    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({

      email,

      password

    });

    if (error) {

      alert(error.message);

      return;

    }

    alert("✅ Login Successful");

    navigate("/dashboard");

  }

  return (

    <div style={{ padding: "50px" }}>

      <h1>🔐 Login</h1>

      <form onSubmit={handleLogin}>

        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

        />

        <br /><br />

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

        />

        <br /><br />

        <button type="submit">

          Login

        </button>

      </form>

    </div>

  );

}
