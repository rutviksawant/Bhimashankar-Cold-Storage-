


// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <ul className="nav-links">
//         <li><Link to="/">Overview</Link></li>
//         <li><Link to="/solution">Cold Chain Solution</Link></li>
//         <li><Link to="/management">Cold Chain Management</Link></li>
//         <li><Link to="/storage">Cold Storage</Link></li>
//         <li><Link to="/contact">Contact Us</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

  import { useState } from "react";
  import { Link } from "react-router-dom";
  import "./Navbar.css";

  function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <nav className="navbar">
        
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Overview</Link></li>
          <li><Link to="/solution" onClick={() => setMenuOpen(false)}>Cold Chain Solution</Link></li>
          <li><Link to="/management" onClick={() => setMenuOpen(false)}>Cold Chain Management</Link></li>
          <li><Link to="/storage" onClick={() => setMenuOpen(false)}>Cold Storage</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>

      </nav>
    );
  }

  export default Navbar;