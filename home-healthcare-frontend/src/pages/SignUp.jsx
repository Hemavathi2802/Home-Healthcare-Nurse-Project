import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>

      <input type="text" placeholder="Full Name" />
      <br /><br />

      <input type="email" placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <select>
        <option value="">Select Role</option>
        <option value="patient">Patient</option>
        <option value="nurse">Nurse</option>
      </select>
      <br /><br />

      <button>Sign Up</button>

      <p>
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignUp;