import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");

    // save login
    localStorage.setItem("user", JSON.stringify(res.data));

    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
