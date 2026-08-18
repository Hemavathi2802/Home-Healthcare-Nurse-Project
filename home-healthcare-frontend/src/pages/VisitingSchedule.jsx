import React, { useState } from "react";
import "./VisitingSchedule.css";

function VisitingSchedule({ onNavigate }) {
  const [schedules, setSchedules] = useState([]);

  const [patientName, setPatientName] = useState("");
  const [nurseName, setNurseName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addSchedule = (e) => {
    e.preventDefault();

    if (!patientName || !nurseName || !date || !time) {
      alert("Please fill all fields.");
      return;
    }

    const newSchedule = {
      id: Date.now(),
      patientName,
      nurseName,
      date,
      time,
      status: "Scheduled",
    };

    setSchedules([...schedules, newSchedule]);

    setPatientName("");
    setNurseName("");
    setDate("");
    setTime("");
  };

  const deleteSchedule = (id) => {
    setSchedules(
      schedules.filter((schedule) => schedule.id !== id)
    );
  };

  return (
    <div className="schedule-page">

      <h1>Visiting Schedule</h1>

      <p>Manage nurse visiting schedules</p>

      <div className="schedule-form">

        <h2>Add Schedule</h2>

        <form onSubmit={addSchedule}>

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
            Add Schedule
          </button>

        </form>
      </div>

      <div className="schedule-list">

        <h2>Scheduled Visits</h2>

        {schedules.length === 0 ? (
          <p>No schedules available.</p>
        ) : (
          schedules.map((schedule) => (
            <div
              className="schedule-card"
              key={schedule.id}
            >
              <h3>🏠 Home Visit</h3>

              <p>
                <strong>Patient:</strong>{" "}
                {schedule.patientName}
              </p>

              <p>
                <strong>Nurse:</strong>{" "}
                {schedule.nurseName}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {schedule.date}
              </p>

              <p>
                <strong>Time:</strong>{" "}
                {schedule.time}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {schedule.status}
              </p>

              <button
                className="delete-button"
                onClick={() => deleteSchedule(schedule.id)}
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

export default VisitingSchedule;