import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RoleSelection from "./pages/RoleSelection";

import Dashboard from "./pages/Dashboard";
import PatientManagement from "./pages/PatientManagement";
import NurseManagement from "./pages/NurseManagement";
import AppointmentManagement from "./pages/AppointmentManagement";
import VisitingSchedule from "./pages/VisitingSchedule";
import VisitReport from "./pages/VisitReport";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/role-selection" element={<RoleSelection />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Core Modules */}
        <Route
          path="/patient-management"
          element={<PatientManagement />}
        />

        <Route
          path="/nurse-management"
          element={<NurseManagement />}
        />

        <Route
          path="/appointment-management"
          element={<AppointmentManagement />}
        />

        <Route
          path="/visiting-schedule"
          element={<VisitingSchedule />}
        />

        <Route
          path="/visit-report"
          element={<VisitReport />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;