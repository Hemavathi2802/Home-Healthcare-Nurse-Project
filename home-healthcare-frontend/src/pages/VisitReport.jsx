import React, { useState } from "react";
import "./VisitReport.css";

function VisitReport({ onNavigate }) {
  const [reports, setReports] = useState([]);

  const [patientName, setPatientName] = useState("");
  const [nurseName, setNurseName] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [remarks, setRemarks] = useState("");
  const [status, setStatus] = useState("Completed");

  const addReport = (e) => {
    e.preventDefault();

    if (!patientName || !nurseName || !visitDate || !remarks) {
      alert("Please fill all fields.");
      return;
    }

    const newReport = {
      id: Date.now(),
      patientName,
      nurseName,
      visitDate,
      remarks,
      status,
    };

    setReports([...reports, newReport]);

    setPatientName("");
    setNurseName("");
    setVisitDate("");
    setRemarks("");
    setStatus("Completed");
  };

  const deleteReport = (id) => {
    setReports(
      reports.filter((report) => report.id !== id)
    );
  };

  return (
    <div className="report-page">

      <h1>Visit Reports</h1>

      <p>Manage completed nurse visit reports</p>

      <div className="report-form">

        <h2>Create Visit Report</h2>

        <form onSubmit={addReport}>

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
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>

          <textarea
            placeholder="Visit Remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />

          <button type="submit">
            Save Report
          </button>

        </form>
      </div>

      <div className="report-list">

        <h2>Visit Report List</h2>

        {reports.length === 0 ? (
          <p>No visit reports available.</p>
        ) : (
          reports.map((report) => (
            <div
              className="report-card"
              key={report.id}
            >

              <h3>📋 Home Visit Report</h3>

              <p>
                <strong>Patient:</strong>{" "}
                {report.patientName}
              </p>

              <p>
                <strong>Nurse:</strong>{" "}
                {report.nurseName}
              </p>

              <p>
                <strong>Visit Date:</strong>{" "}
                {report.visitDate}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {report.status}
              </p>

              <p>
                <strong>Remarks:</strong>{" "}
                {report.remarks}
              </p>

              <button
                className="delete-button"
                onClick={() => deleteReport(report.id)}
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

export default VisitReport;