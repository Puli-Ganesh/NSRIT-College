import React, { useState } from "react";
import "./FloatingDock.css";
import { FaPhoneAlt, FaGlobeAmericas, FaBinoculars, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FloatingDock() {
  const [open, setOpen] = useState(null);

  const items = [
    {
      key: "phone",
      color: "#c01478",
      icon: <FaPhoneAlt />,
      panel: (
        <a href="tel:+918179197108" className="dock-text">
          +91-8179197108
          <span className="dock-trail"><FaPhoneAlt /></span>
        </a>
      )
    },
    {
      key: "globe",
      color: "#ee6b4c",
      icon: <FaGlobeAmericas />,
      panel: (
        <div className="dock-socials">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="X"><FaXTwitter /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <span className="dock-trail"><FaGlobeAmericas /></span>
        </div>
      )
    },
    {
      key: "tour",
      color: "#0cc1ee",
      icon: <FaBinoculars />,
      panel: (
        <a href="#" className="dock-text">
          Virtual Tour
          <span className="dock-trail"><FaBinoculars /></span>
        </a>
      )
    },
    {
      key: "whatsapp",
      color: "#55b700",
      icon: <FaWhatsapp />,
      panel: (
        <a href="https://wa.me/919248748443" target="_blank" rel="noreferrer" className="dock-text">
          WhatsApp
          <span className="dock-trail"><FaWhatsapp /></span>
        </a>
      )
    }
  ];

  return (
    <div className="dock">
      {items.map((it) => (
        <div
          key={it.key}
          className={`dock-item ${open === it.key ? "open" : ""}`}
          style={{ background: it.color }}
          onMouseEnter={() => setOpen(it.key)}
          onMouseLeave={() => setOpen(null)}
          onClick={() => setOpen(open === it.key ? null : it.key)}
        >
          <div className="dock-icon">{it.icon}</div>
          <div className="dock-panel" style={{ background: it.color }}>
            {it.panel}
          </div>
        </div>
      ))}
    </div>
  );
}
