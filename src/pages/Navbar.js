// D:\college\src\pages\Navbar.js
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const toggleDrawer = () => {
    window.dispatchEvent(new CustomEvent("nav-drawer-toggle"));
  };

  return (
    <div className="nav-header-container">
      <div className="nav-header-top">
        <div className="nav-header-left">NSRIET</div>
        <div className="nav-header-right">
          <span>Circular Notification</span>
          <span className="divider">|</span>
          <span>Upcoming Events</span>
          <span className="divider">|</span>
          <span>Feedback</span>
          <span className="divider">|</span>
          <span>News Bulletin</span>
          <span className="divider">|</span>
          <span>Career Opportunities</span>
        </div>
      </div>
      <div className="nav-header-bottom">
        <div className="nav-header-logo">
          <img src="/images/main-logo1.png" alt="logo" className="nav-logo" />
        </div>
        <button className="nav-hamburger" aria-label="Open menu" onClick={toggleDrawer}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  );
}
