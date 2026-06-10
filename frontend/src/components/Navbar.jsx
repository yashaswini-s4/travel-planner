import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        ✈ Travel Planner
      </div>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/trips">My Trips</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;