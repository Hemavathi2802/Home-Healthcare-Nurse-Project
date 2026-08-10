import { useEffect, useState } from "react";

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/patients")
      .then((response) => response.json())
      .then((data) => setPatients(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Patient Management</h2>

      {patients.map((patient) => (
        <div key={patient.patientId}>
          <p>Name: {patient.name}</p>
          <p>Age: {patient.age}</p>
          <p>Gender: {patient.gender}</p>
          <p>Phone: {patient.phone}</p>
          <p>Address: {patient.address}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Patients;