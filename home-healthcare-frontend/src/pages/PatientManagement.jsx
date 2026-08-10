import { useState } from "react";
import "./PatientManagement.css";

function PatientManagement() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPatient = (e) => {
    e.preventDefault();

    if (
      !patient.name ||
      !patient.age ||
      !patient.gender ||
      !patient.phone ||
      !patient.address
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Patient Added Successfully");

    setPatient({
      name: "",
      age: "",
      gender: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="patient-page">
      <h1>Patient Management</h1>

      <p className="subtitle">
        Add and manage patient details
      </p>

      <form
        className="patient-form"
        onSubmit={handleAddPatient}
      >
        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={patient.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={patient.age}
          onChange={handleChange}
        />

        <select
          name="gender"
          value={patient.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={patient.phone}
          onChange={handleChange}
        />

        <textarea
          name="address"
          placeholder="Enter patient address"
          value={patient.address}
          onChange={handleChange}
        />

        <button type="submit">
          Add Patient
        </button>
      </form>
    </div>
  );
}

export default PatientManagement;