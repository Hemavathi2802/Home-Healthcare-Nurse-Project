import React, { useState } from "react";
import "./PatientManagement.css";

function PatientManagement({ onNavigate }) {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const addPatient = (e) => {
    e.preventDefault();

    if (!name || !age || !phone || !address) {
      alert("Please fill all fields.");
      return;
    }

    const newPatient = {
      id: Date.now(),
      name,
      age,
      gender,
      phone,
      address,
    };

    setPatients([...patients, newPatient]);

    setName("");
    setAge("");
    setGender("Male");
    setPhone("");
    setAddress("");
  };

  const deletePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <div className="patient-page">

      <h1>Patient Management</h1>
      <p>Manage patient information</p>

      {/* Add Patient Form */}
      <div className="patient-form">

        <h2>Add Patient</h2>

        <form onSubmit={addPatient}>

          <input
            type="text"
            placeholder="Patient Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button type="submit">
            Add Patient
          </button>

        </form>
      </div>

      {/* Patient List */}
      <div className="patient-list">

        <h2>Patient List</h2>

        {patients.length === 0 ? (
          <p>No patients added yet.</p>
        ) : (
          patients.map((patient) => (
            <div className="patient-card" key={patient.id}>

              <h3>{patient.name}</h3>

              <p>Age: {patient.age}</p>
              <p>Gender: {patient.gender}</p>
              <p>Phone: {patient.phone}</p>
              <p>Address: {patient.address}</p>

              <button
                className="delete-button"
                onClick={() => deletePatient(patient.id)}
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

export default PatientManagement;