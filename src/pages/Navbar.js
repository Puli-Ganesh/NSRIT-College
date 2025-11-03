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
        <img src="/images/main-logo.png" alt="logo" className="navbar-logo" />
        <button className="hamburger-btn" aria-label="Open menu" onClick={toggleDrawer}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  );
}
