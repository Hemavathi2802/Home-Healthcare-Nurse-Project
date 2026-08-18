import React, { useState } from "react";
import "./AppointmentManagement.css";

function AppointmentManagement({ onNavigate }) {
  const [appointments, setAppointments] = useState([]);

  const [patientName, setPatientName] = useState("");
  const [nurseName, setNurseName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("General Nursing");

  const addAppointment = (e) => {
    e.preventDefault();

    if (!patientName || !nurseName || !date || !time) {
      alert("Please fill all fields.");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      patientName,
      nurseName,
      date,
      time,
      service,
      status: "Pending",
    };

    setAppointments([...appointments, newAppointment]);

    setPatientName("");
    setNurseName("");
    setDate("");
    setTime("");
    setService("General Nursing");
  };

  const deleteAppointment = (id) => {
    setAppointments(
      appointments.filter(
        (appointment) => appointment.id !== id
      )
    );
  };

  return (
    <div className="appointment-page">

      <h1>Appointment Management</h1>

      <p>Book and manage nurse appointments</p>

      {/* Appointment Form */}

      <div className="appointment-form">

        <h2>Book Appointment</h2>

        <form onSubmit={addAppointment}>

          <input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Nurse Name"
            value={nurseName}
            onChange={(e) => setNurseName(e.target.value)}
          />

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="General Nursing">
              General Nursing
            </option>

            <option value="Elderly Care">
              Elderly Care
            </option>

            <option value="Post Surgery Care">
              Post Surgery Care
            </option>

            <option value="Medication Support">
              Medication Support
            </option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">
            Book Appointment
          </button>

        </form>
      </div>

      {/* Appointment List */}

      <div className="appointment-list">

        <h2>Appointments</h2>

        {appointments.length === 0 ? (
          <p>No appointments available.</p>
        ) : (
          appointments.map((appointment) => (
            <div
              className="appointment-card"
              key={appointment.id}
            >

              <h3>{appointment.service}</h3>

              <p>
                <strong>Patient:</strong>{" "}
                {appointment.patientName}
              </p>

              <p>
                <strong>Nurse:</strong>{" "}
                {appointment.nurseName}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {appointment.date}
              </p>

              <p>
                <strong>Time:</strong>{" "}
                {appointment.time}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {appointment.status}
              </p>

              <button
                className="delete-button"
                onClick={() =>
                  deleteAppointment(appointment.id)
                }
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

export default AppointmentManagement;