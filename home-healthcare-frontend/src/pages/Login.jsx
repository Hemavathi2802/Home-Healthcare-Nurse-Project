import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Frontend testing only
    if (email && password) {
      alert("Login successful!");

      // Login → Role Selection
      navigate("/role-selection");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h2>Welcome Back</h2>

        <p className="subtitle">
          Login to your Home Healthcare account
        </p>

        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* PASSWORD */}
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* LOGIN BUTTON */}
          <button type="submit">
            Login
          </button>

        </form>

        {/* SIGNUP */}
        <p className="signup-link">
          Don't have an account?{" "}
          <Link to="/signup">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;