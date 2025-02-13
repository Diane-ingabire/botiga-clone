import React, { useState } from 'react';
import { FaBars, FaSearch,FaUser, FaEnvelope, FaBell, FaSignOutAlt, FaCog, FaInbox } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ".//dashboard_styles/DashboardNavbar.css"
import Americanflag from "../assets/americanflag.png"
import user from "../assets/user.png"

const DashboardNavbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [showCountries, setShowCountries] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const countries = [
    { code: 'US', name: 'English' },
    { code: 'FR', name: 'French' },
    { code: 'ES', name: 'Spanish' },
    { code: 'DE', name: 'German' }
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
    
  };

  return (
    <nav className="dashnavbar">
      <div className="dashnavbar-left">
        <button className="menu-button">
          <FaBars />
        </button>

        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <FaSearch className="search-icon" />
        </div>
      </div>

      <div className="dashnavbar-right">
        <button onClick={toggleTheme} className="nav-button">
          {isDark ? <FiMoon /> : <FiSun />}
        </button>

        <div className="dropdown-container">
          <button onClick={() => setShowCountries(!showCountries)} className="nav-button">
            <img src={Americanflag} alt="Language" className="country-flag" />
          </button>

          {showCountries && (
            <div className="dropdown-menu">
              {countries.map((country) => (
                <button key={country.code} className="dropdown-item">
                  {country.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="dropdown-container">
          <button onClick={() => setShowMessages(!showMessages)} className="nav-button">
            <FaEnvelope />
           
          </button>
          {showMessages && (
            <div className="dropdown-menu">
              <div className="dropdown-item">No new messages</div>
            </div>
          )}
        </div>

        <div className="dropdown-container">
          <button onClick={() => setShowNotifications(!showNotifications)} className="nav-button">
            <FaBell />
            
          </button>
          {showNotifications && (
            <div className="dropdown-menu">
              <div className="dropdown-item">No new notifications</div>
            </div>
          )}
        </div>

        <div className="dropdown-container">
          <button onClick={() => setShowProfile(!showProfile)} className="nav-button">
            <img src={ user} alt= "user"/>
          </button>

          {showProfile && (
            <div className="dropdown-menu">
              <Link to="/profile" className="dropdown-item">
                <FaUser /> Profile
              </Link>
              <Link to="/inbox" className="dropdown-item">
                <FaInbox /> Inbox
              </Link>
              <Link to="/settings" className="dropdown-item">
                <FaCog /> Settings
              </Link>
              <button className="dropdown-item logout">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
