// D:\college\src\pages\Navbar1.js
import React from "react";
import "./Navbar1.css";

export default function Navbar1() {
  return (
    <div className="nav1">
      <div className="nav1-top">
        <ul className="nav1-menu">
          <li className="nav1-item"><a href="#home" title="Home">Home</a></li>

          <li className="nav1-item has-dropdown">
            <button title="About">About <span className="arrow">▾</span></button>
            <ul className="dropdown">
              <li><a href="#history">History</a></li>
              <li><a href="#management">Management</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#aves">Aishwarya Viganan Educations Society</a></li>
              <li><a href="#tdef">Trans-Disciplinary Educational Framework</a></li>
            </ul>
          </li>

          <li className="nav1-item has-dropdown">
            <button title="Governance">Governance <span className="arrow">▾</span></button>
            <ul className="dropdown">
              <li><a href="#organogram">Organogram</a></li>
              <li><a href="#governing-body">Governing Body</a></li>
              <li><a href="#academic-council">Academic Council</a></li>
            </ul>
          </li>

          <li className="nav1-item has-dropdown">
            <button title="Admissions">Admissions <span className="arrow">▾</span></button>
            <ul className="dropdown">
              <li><a href="#why-nsrit">Why NSRIT</a></li>
              <li><a href="#diploma">Diploma Programs</a></li>
              <li><a href="#ug">Undergraduate Programs</a></li>
              <li><a href="#pg">Postgraduate Programs</a></li>
              <li><a href="#scholarships">Academic Merit Scholarship Schemes</a></li>
            </ul>
          </li>

          <li className="nav1-item has-dropdown">
            <button title="Academics">Academics <span className="arrow">▾</span></button>
            <ul className="dropdown">
              <li><a href="#programs">Programs</a></li>
              <li><a href="#obe">Outcome Based Education (OBE)</a></li>
              <li><a href="#best-practices">Best Practices</a></li>
              <li><a href="#lms">LMS</a></li>
              <li><a href="#calendar">Academic Calendar</a></li>
              <li><a href="#library">Knowledge Resource Center (Library)</a></li>
            </ul>
          </li>

          <li className="nav1-item"><a href="#research" title="Research">Research</a></li>
          <li className="nav1-item"><a href="#arr" title="Accreditation, Ranking & Recognition">Accreditation, Ranking & Recognition</a></li>

          <li className="nav1-item has-dropdown">
            <button title="CDC">CDC <span className="arrow">▾</span></button>
            <ul className="dropdown">
              <li><a href="#about-cdc">About CDC</a></li>
              <li><a href="#placements">Placements</a></li>
              <li><a href="#contact-cdc">Contact</a></li>
            </ul>
          </li>

          <li className="nav1-item has-dropdown">
            <button title="National & International Initiatives">National & International Initiites <span className="arrow">▾</span></button>
            <ul className="dropdown dropdown-wide">
              <li><a href="#nep">NEP Implementation</a></li>
              <li><a href="#acinc">Atal Community Innovation Center</a></li>
              <li><a href="#mvu">Maharishi Vedic University Holland</a></li>
              <li><a href="#upskilling">Campus up-skilling</a></li>
              <li><a href="#ddugky">DDU-GKY</a></li>
              <li><a href="#ugcs">UGC Skills Hub</a></li>
              <li><a href="#rpl">Recognised Prior Learning</a></li>
              <li><a href="#int-cert">International Certification</a></li>
              <li><a href="#pmv">PM Vishwakarma</a></li>
              <li><a href="#abc">Academic Bank of Credits</a></li>
              <li><a href="#pmkvy">PMKVY Special Projects</a></li>
              <li><a href="#collage">Photo Collage</a></li>
            </ul>
          </li>

          <li className="nav1-item has-dropdown">
            <button title="Quick Links">Quick Links <span className="arrow">▾</span></button>
            <ul className="dropdown dropdown-wide">
              <li><a href="#coe">Office of CoE & Autonomous</a></li>
              <li><a href="#iic">Institute Innovation Council</a></li>
              <li><a href="#iicell">Institution Industry Cell</a></li>
              <li><a href="#alumni">Alumni</a></li>
              <li><a href="#feedback">Feedback</a></li>
              <li><a href="#campus-life">Campus Life</a></li>
              <li><a href="#account-help">Account Help Desk</a></li>
              <li><a href="#mandatory-committee">Mandatory Committee</a></li>
              <li><a href="#policy-docs">Institution Policy Documents</a></li>
              <li><a href="#mandatory-disclosures">Mandatory Disclosures</a></li>
              <li><a href="#food-safety">Food Safety Certificate</a></li>
              <li><a href="#law-college">Sri Prasunna Law College</a></li>
              <li><a href="#sdgs">Initiatives towards SDGs</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="nav1-bottom">
        <div className="ticker">
          <div className="ticker__track">
            204 - 2025: 669 placement offers | 2025 - 2026 (As on date) 216 offers. Delphi TVS: 105, Wheels India: 24, TAFE: 11, Schneider: 09, Valeo India Pvt. Ltd.: 25, Yazaki India Pvt. Ltd.: 24, Swelect: 18 (All come with pre-placement offers + Stipend ranging from INR 15000++)
          </div>
        </div>
      </div>
    </div>
  );
}
