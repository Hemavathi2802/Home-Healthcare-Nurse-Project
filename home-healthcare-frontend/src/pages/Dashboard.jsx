import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [role, setRole] = useState(
    localStorage.getItem("selectedRole") || "patient"
  );

  const roleNames = {
    patient: "Patient",
    nurse: "Nurse",
    admin: "Admin",
  };

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    localStorage.setItem("selectedRole", newRole);
  };

  const handleLogout = () => {
    localStorage.removeItem("selectedRole");
    navigate("/login");
  };

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">+</div>
          <span>HomeCare</span>
        </div>

        <nav className="sidebar-menu">

          <button className="menu-item active">
            <span>🏠</span>
            Dashboard
          </button>

          <button className="menu-item">
            <span>📅</span>
            Appointments
          </button>

          <button className="menu-item">
            <span>👥</span>
            Patients
          </button>

          <button className="menu-item">
            <span>👩‍⚕️</span>
            Nurses
          </button>

          <button className="menu-item">
            <span>💬</span>
            Messages
          </button>

          <button className="menu-item">
            <span>⚙️</span>
            Settings
          </button>

        </nav>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <span>↪</span>
          Logout
        </button>

      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* HEADER */}
        <header className="dashboard-header">

          <div>
            <p className="welcome-small">
              HOME HEALTHCARE
            </p>

            <h1>
              Dashboard
            </h1>
          </div>

          <div className="header-right">

            <button className="notification">
              🔔
              <span></span>
            </button>

            <div className="profile">

              <div className="profile-avatar">
                {role === "patient"
                  ? "P"
                  : role === "nurse"
                  ? "N"
                  : "A"}
              </div>

              <div>
                <strong>
                  {roleNames[role]}
                </strong>

                <small>
                  {roleNames[role]} Account
                </small>
              </div>

            </div>

          </div>

        </header>

        {/* ROLE SELECTOR */}
        <section className="role-section">

          <div>
            <h3>Select Role</h3>
            <p>
              Choose your dashboard role
            </p>
          </div>

          <select
            value={role}
            onChange={(e) =>
              handleRoleChange(e.target.value)
            }
          >
            <option value="patient">
              Patient
            </option>

            <option value="nurse">
              Nurse
            </option>

            <option value="admin">
              Admin
            </option>
          </select>

        </section>

        {/* WELCOME CARD */}
        <section className="welcome-card">

          <div>
            <p>Welcome to HomeCare 👋</p>

            <h2>
              Good to see you, {roleNames[role]}!
            </h2>

            <span>
              Manage your healthcare activities
              easily from your dashboard.
            </span>
          </div>

          <div className="welcome-icon">
            🏥
          </div>

        </section>

        {/* STAT CARDS */}
        <section className="stats-grid">

          <div className="stat-card blue">
            <div className="stat-icon">
              📅
            </div>

            <div>
              <span>Total Appointments</span>
              <h2>12</h2>
            </div>
          </div>

          <div className="stat-card green">
            <div className="stat-icon">
              ✅
            </div>

            <div>
              <span>Completed</span>
              <h2>08</h2>
            </div>
          </div>

          <div className="stat-card purple">
            <div className="stat-icon">
              ⏳
            </div>

            <div>
              <span>Upcoming</span>
              <h2>04</h2>
            </div>
          </div>

          <div className="stat-card orange">
            <div className="stat-icon">
              ❤️
            </div>

            <div>
              <span>Healthcare Requests</span>
              <h2>06</h2>
            </div>
          </div>

        </section>

        {/* BOTTOM GRID */}
        <section className="content-grid">

          {/* UPCOMING APPOINTMENTS */}
          <div className="dashboard-card">

            <div className="card-header">
              <div>
                <h3>Upcoming Appointments</h3>
                <p>Your recent healthcare appointments</p>
              </div>

              <button>
                View All
              </button>
            </div>

            <div className="appointment">

              <div className="appointment-icon">
                👩‍⚕️
              </div>

              <div className="appointment-info">
                <strong>
                  Nurse Consultation
                </strong>

                <span>
                  Tomorrow • 10:00 AM
                </span>
              </div>

              <span className="status">
                Confirmed
              </span>

            </div>

            <div className="appointment">

              <div className="appointment-icon">
                🩺
              </div>

              <div className="appointment-info">
                <strong>
                  Health Checkup
                </strong>

                <span>
                  Friday • 02:30 PM
                </span>
              </div>

              <span className="status pending">
                Pending
              </span>

            </div>

          </div>

          {/* QUICK ACTIONS */}
          <div className="dashboard-card">

            <div className="card-header">
              <div>
                <h3>Quick Actions</h3>
                <p>Access frequently used options</p>
              </div>
            </div>

            <div className="quick-actions">

              <button>
                <span>📅</span>
                <div>
                  <strong>Book Appointment</strong>
                  <small>Schedule a visit</small>
                </div>
              </button>

              <button>
                <span>👩‍⚕️</span>
                <div>
                  <strong>Find Nurse</strong>
                  <small>View available nurses</small>
                </div>
              </button>

              <button>
                <span>💬</span>
                <div>
                  <strong>Messages</strong>
                  <small>Check your messages</small>
                </div>
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;