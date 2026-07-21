import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../services/supabase";
import "../styles/login.css";

export default function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {

    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("🎉 Account Created Successfully!");

    navigate("/");

  }

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>🚀 ProjectPilot AI</h1>

        <p>Create Your Account</p>

        <form onSubmit={handleSignup}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="signup-link">

          Already have an account?

          <Link to="/"> Login</Link>

        </p>

      </div>

    </div>

  );

}
