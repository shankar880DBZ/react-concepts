import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>Welcome {user?.name}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
