import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RoleSelection.css";

function RoleSelection() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");

  const roles = [
    {
      id: "patient",
      title: "Patient",
      icon: "👤",
      description: "Book and manage your healthcare appointments.",
    },
    {
      id: "nurse",
      title: "Nurse",
      icon: "👩‍⚕️",
      description: "Manage patients and healthcare appointments.",
    },
    {
      id: "admin",
      title: "Admin",
      icon: "🛡️",
      description: "Manage users, nurses and system activities.",
    },
  ];

  const handleContinue = () => {
    if (!selectedRole) {
      alert("Please select a role");
      return;
    }

    // Temporary frontend navigation
    navigate("/dashboard");
  };

  return (
    <div className="role-container">
      <div className="role-box">

        <h2>Select Your Role</h2>

        <p className="role-subtitle">
          Choose your role to continue
        </p>

        <div className="role-list">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`role-card ${
                selectedRole === role.id ? "selected" : ""
              }`}
              onClick={() => setSelectedRole(role.id)}
            >
              <div className="role-icon">
                {role.icon}
              </div>

              <div className="role-content">
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </div>

              <div className="radio-circle">
                {selectedRole === role.id && (
                  <span>✓</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          className="continue-btn"
          onClick={handleContinue}
        >
          Continue
          <span>→</span>
        </button>

      </div>
    </div>
  );
}

export default RoleSelection;