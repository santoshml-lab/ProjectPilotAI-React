import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabase";

export default function LogoutButton() {

  const navigate = useNavigate();

  async function handleLogout() {

    const confirmLogout = window.confirm("Do you want to logout?");

    if (!confirmLogout) return;

    await supabase.auth.signOut();

    navigate("/");

  }

  return (
    <button
      className="new-btn"
      onClick={handleLogout}
    >
      🚪 Logout
    </button>
  );

}
