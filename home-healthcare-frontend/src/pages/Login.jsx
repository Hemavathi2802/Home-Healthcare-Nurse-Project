import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Home Healthcare</h1>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>Login</button>

        <p>
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;