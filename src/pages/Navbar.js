import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-top">
        <div className="navbar-top-left">NSRIT</div>
        <div className="navbar-top-right">
          <span>News Bulletin</span>
          <span className="divider">|</span>
          <span>Career Opportunities</span>
        </div>
      </div>
      <div className="navbar-bottom">
        <img src="/images/logo1.png" alt="logo" className="navbar-logo" />
      </div>
    </div>
  );
}
