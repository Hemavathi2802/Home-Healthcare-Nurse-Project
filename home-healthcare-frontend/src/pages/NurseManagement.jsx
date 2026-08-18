import React, { useState } from "react";
import "./NurseManagement.css";

function NurseManagement({ onNavigate }) {
  const [nurses, setNurses] = useState([]);
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");

  const addNurse = (e) => {
    e.preventDefault();

    if (!name || !specialization || !phone || !experience) {
      alert("Please fill all fields.");
      return;
    }

    const newNurse = {
      id: Date.now(),
      name,
      specialization,
      phone,
      experience,
    };

    setNurses([...nurses, newNurse]);

    setName("");
    setSpecialization("");
    setPhone("");
    setExperience("");
  };

  const deleteNurse = (id) => {
    setNurses(nurses.filter((nurse) => nurse.id !== id));
  };

  return (
    <div className="nurse-page">

      <h1>Nurse Management</h1>
      <p>Manage nurse information</p>

      <div className="nurse-form">
        <h2>Add Nurse</h2>

        <form onSubmit={addNurse}>

          <input
            type="text"
            placeholder="Nurse Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="number"
            placeholder="Experience (Years)"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <button type="submit">
            Add Nurse
          </button>

        </form>
      </div>

      <div className="nurse-list">

        <h2>Nurse List</h2>

        {nurses.length === 0 ? (
          <p>No nurses added yet.</p>
        ) : (
          nurses.map((nurse) => (
            <div className="nurse-card" key={nurse.id}>

              <h3>{nurse.name}</h3>

              <p>Specialization: {nurse.specialization}</p>
              <p>Phone: {nurse.phone}</p>
              <p>Experience: {nurse.experience} years</p>

              <button
                className="delete-button"
                onClick={() => deleteNurse(nurse.id)}
              >
                Delete
              </button>

            </div>
          ))
        )}

      </div>

      <button
        className="back-button"
        onClick={() => onNavigate("dashboard")}
      >
        ← Back to Dashboard
      </button>

    </div>
  );
}

export default NurseManagement;