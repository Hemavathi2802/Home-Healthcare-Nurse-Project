import React from "react";
import "./Home.css";

function Home({ onNavigate }) {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="small-title">HOME HEALTHCARE SERVICES</p>

          <h1>
            Quality Healthcare
            <br />
            <span>At Your Home</span>
          </h1>

          <p className="hero-text">
            Professional nursing care delivered safely and conveniently
            at your doorstep.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => onNavigate("login")}
            >
              Book a Nurse Visit
            </button>

            <button
              className="outline-btn"
              onClick={() => onNavigate("signup")}
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="hero-card">
          <div className="medical-icon">🏥</div>
          <h2>Home Healthcare</h2>
          <p>
            Safe, reliable and convenient healthcare
            services delivered to your home.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>Simple & Convenient Healthcare</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">👩‍⚕️</div>
            <h3>Nurse Visits</h3>
            <p>
              Schedule professional nurse visits at your home.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Easy Scheduling</h3>
            <p>
              Book and manage your healthcare appointments easily.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Visit Reports</h3>
            <p>
              View reports from completed nurse visits.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <h3>Home Healthcare</h3>
        <p>Making home healthcare simple and accessible.</p>
        <p>© 2026 Home Healthcare. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Home;