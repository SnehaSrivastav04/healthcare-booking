import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="/booking">Book Appointment</Link>
    </nav>
  );
}

export default Navbar;