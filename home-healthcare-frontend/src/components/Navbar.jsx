import { Link } from "react-router-dom";
import "./Navigation.css";

function Navbar() {
  return (
    <nav className="navigation">
      <div className="logo">
        Home Healthcare
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;