import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', backgroundColor: '#333' }}>
      <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
      <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>Signup</Link>
      <Link to="/doctors" style={{ color: 'white', textDecoration: 'none' }}>Doctors</Link>
      <Link to="/booking" style={{ color: 'white', textDecoration: 'none' }}>Book Appointment</Link>
    </nav>
  );
}

export default Navbar;