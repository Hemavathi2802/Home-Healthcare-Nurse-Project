import React from "react";
import "./Navigation.css";

function Navigation({ onNavigate }) {
  return (
    <nav className="navigation">

      <div className="logo">
         Home Healthcare
      </div>

      <div className="nav-links">
        <button onClick={() => onNavigate("home")}>
          Home
        </button>

        <button onClick={() => onNavigate("login")}>
          Login
        </button>

        <button onClick={() => onNavigate("signup")}>
          Sign Up
        </button>
      </div>

    </nav>
  );
}

export default Navigation;