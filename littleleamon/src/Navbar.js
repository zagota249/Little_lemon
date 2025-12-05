import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/menu">Menu</Link></li>
      </ul>
    </nav>
  );
}
