// D:\college\src\pages\Navbar.js
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const toggleDrawer = () => {
    window.dispatchEvent(new CustomEvent("nav-drawer-toggle"));
  };

  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <div className="navbar-top-left">NSRIET</div>
        <div className="navbar-top-right">
          <span>News Bulletin</span>
          <span className="divider">|</span>
          <span>Career Opportunities</span>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="logo-pair">
          <img src="/images/main-logo.png" alt="logo" className="navbar-logo main" />
          <img src="/images/logo1.png" alt="logo" className="navbar-logo logo1" />
        </div>
        <button className="hamburger-btn" aria-label="Open menu" onClick={toggleDrawer}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  );
}
