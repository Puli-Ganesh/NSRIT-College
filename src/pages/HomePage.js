// D:\college\src\pages\HomePage.js
import React from "react";
import Navbar from "./Navbar";
import Navbar1 from "./Navbar1";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home">
      <Navbar />
      <Navbar1 />
      <div className="banner">
        <img src="/images/main-banner.jpg" alt="Main Banner" className="banner-img" />
      </div>
    </div>
  );
}
