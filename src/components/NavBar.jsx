import { useNavigate } from "react-router-dom";
import "../styles/nav-bar.css";
import Logo from "/Logo.svg";
import { useState } from "react";

export default function NavBar() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo-section">
        <img src={Logo} alt="logo" onClick={() => navigate("/")} />
      </div>
      <nav className="navbar-items">
        <ul>
          <li>Events</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Clients</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="login-btn" onClick={()=>navigate('/login')}>
          <div className="button-text">Login</div>
        </div>
      </nav>
      {/* Mobile responsive navbar */}
      <div className="nav-menu">
        <label className="hamburger">
          <input
            type="checkbox"
            onClick={() => setToggleMenu((prev) => !prev)}
          />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>
        <div
          className={`navbar-menu-list ${
            toggleMenu ? "active-menu" : "inactive-menu"
          }`}
        >
          <ul>
            <li onClick={()=>setToggleMenu(false)}>Events</li>
            <li onClick={()=>setToggleMenu(false)}>Services</li>
            <li onClick={()=>setToggleMenu(false)}>Portfolio</li>
            <li onClick={()=>setToggleMenu(false)}>Clients</li>
            <li onClick={()=>setToggleMenu(false)}>About</li>
            <li onClick={()=>setToggleMenu(false)}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
