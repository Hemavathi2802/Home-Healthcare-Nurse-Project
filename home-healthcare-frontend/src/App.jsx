import React, { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import PatientManagement from "./pages/PatientManagement";
import NurseManagement from "./pages/NurseManagement";
import AppointmentManagement from "./pages/AppointmentManagement";
import VisitingSchedule from "./pages/VisitingSchedule";
import VisitReport from "./pages/VisitReport";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const handleNavigate = (pageName) => {
    setPage(pageName);
  };

  return (
    <div>

      {page === "home" && (
        <Home onNavigate={handleNavigate} />
      )}

      {page === "login" && (
        <Login onNavigate={handleNavigate} />
      )}

      {page === "signup" && (
        <SignUp onNavigate={handleNavigate} />
      )}

      {page === "dashboard" && (
        <Dashboard onNavigate={handleNavigate} />
      )}

      {page === "patients" && (
        <PatientManagement onNavigate={handleNavigate} />
      )}

      {page === "nurses" && (
        <NurseManagement onNavigate={handleNavigate} />
      )}

      {page === "appointments" && (
        <AppointmentManagement onNavigate={handleNavigate} />
      )}

      {page === "schedule" && (
        <VisitingSchedule onNavigate={handleNavigate} />
      )}

      {page === "reports" && (
        <VisitReport onNavigate={handleNavigate} />
      )}

    </div>
  );
}

export default App;