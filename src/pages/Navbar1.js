// D:\college\src\pages\Navbar1.js
import React, { useEffect, useRef, useState } from "react";
import "./Navbar1.css";

const MENU = [
  { label: "Home", href: "#home" },
  {
    label: "About",
    items: [
      { label: "History", href: "#history" },
      { label: "Management", href: "#management" },
      { label: "Leadership", href: "#leadership" },
      { label: "Aishwarya Viganan Educations Society", href: "#aves" },
      { label: "Trans-Disciplinary Educational Framework", href: "#tdef" }
    ]
  },
  {
    label: "Governance",
    items: [
      { label: "Organogram", href: "#organogram" },
      { label: "Governing Body", href: "#governing-body" },
      { label: "Academic Council", href: "#academic-council" }
    ]
  },
  {
    label: "Admissions",
    items: [
      { label: "Why NSRIT", href: "#why-nsrit" },
      { label: "Diploma Programs", href: "#diploma" },
      { label: "Undergraduate Programs", href: "#ug" },
      { label: "Postgraduate Programs", href: "#pg" },
      { label: "Academic Merit Scholarship Schemes", href: "#scholarships" }
    ]
  },
  {
    label: "Academics",
    items: [
      { label: "Programs", href: "#programs" },
      { label: "Outcome Based Education (OBE)", href: "#obe" },
      { label: "Best Practices", href: "#best-practices" },
      { label: "LMS", href: "#lms" },
      { label: "Academic Calendar", href: "#calendar" },
      { label: "Knowledge Resource Center (Library)", href: "#library" }
    ]
  },
  { label: "Research", href: "#research" },
  { label: "Accreditation, Ranking & Recognition", href: "#arr" },
  {
    label: "CDC",
    items: [
      { label: "About CDC", href: "#about-cdc" },
      { label: "Placements", href: "#placements" },
      { label: "Contact", href: "#contact-cdc" }
    ]
  },
  {
    label: "National & International Initiatives",
    items: [
      { label: "NEP Implementation", href: "#nep" },
      { label: "Atal Community Innovation Center", href: "#acinc" },
      { label: "Maharishi Vedic University Holland", href: "#mvu" },
      { label: "Campus up-skilling", href: "#upskilling" },
      { label: "DDU-GKY", href: "#ddugky" },
      { label: "UGC Skills Hub", href: "#ugcs" },
      { label: "Recognised Prior Learning", href: "#rpl" },
      { label: "International Certification", href: "#int-cert" },
      { label: "PM Vishwakarma", href: "#pmv" },
      { label: "Academic Bank of Credits", href: "#abc" },
      { label: "PMKVY Special Projects", href: "#pmkvy" },
      { label: "Photo Collage", href: "#collage" }
    ]
  },
  {
    label: "Quick Links",
    items: [
      { label: "Office of CoE & Autonomous", href: "#coe" },
      { label: "Institute Innovation Council", href: "#iic" },
      { label: "Institution Industry Cell", href: "#iicell" },
      { label: "Alumni", href: "#alumni" },
      { label: "Feedback", href: "#feedback" },
      { label: "Campus Life", href: "#campus-life" },
      { label: "Account Help Desk", href: "#account-help" },
      { label: "Mandatory Committee", href: "#mandatory-committee" },
      { label: "Institution Policy Documents", href: "#policy-docs" },
      { label: "Mandatory Disclosures", href: "#mandatory-disclosures" },
      { label: "Food Safety Certificate", href: "#food-safety" },
      { label: "Sri Prasunna Law College", href: "#law-college" },
      { label: "Initiatives towards SDGs", href: "#sdgs" }
    ]
  }
];

export default function Navbar1() {
  const navRef = useRef(null);
  const panelRef = useRef(null);
  const anchorRef = useRef(null);
  const [openKey, setOpenKey] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(null);
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0 });

  const placePanel = () => {
    if (!anchorRef.current || !panelRef.current) return;
    const r = anchorRef.current.getBoundingClientRect();
    const desired = {
      top: r.bottom + window.scrollY,
      left: r.left + window.scrollX
    };
    const panelW = panelRef.current.offsetWidth || 320;
    const vw = window.innerWidth;
    const pad = 8;
    const maxLeft = vw - panelW - pad;
    const clampedLeft = Math.max(pad, Math.min(desired.left, maxLeft));
    setPanelPos({ top: desired.top, left: clampedLeft });
  };

  useEffect(() => {
    const onToggle = () => setDrawer((v) => !v);
    window.addEventListener("nav-drawer-toggle", onToggle);
    return () => window.removeEventListener("nav-drawer-toggle", onToggle);
  }, []);

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        setOpenKey(null);
        setAccordionOpen(null);
        setDrawer(false);
      }
    };
    document.addEventListener("keydown", closeOnEsc);
    return () => document.removeEventListener("keydown", closeOnEsc);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        !navRef.current.contains(e.target)
      ) {
        setOpenKey(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (drawer) document.body.classList.add("drawer-open");
    else document.body.classList.remove("drawer-open");
    return () => document.body.classList.remove("drawer-open");
  }, [drawer]);

  useEffect(() => {
    if (openKey !== null) {
      placePanel();
      const onResize = () => placePanel();
      const onScroll = () => placePanel();
      window.addEventListener("resize", onResize, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [openKey]);

  const isDropdown = (m) => Array.isArray(m.items);

  const openFromTarget = (i, target) => {
    anchorRef.current = target;
    setOpenKey(i);
    setTimeout(placePanel, 0);
  };

  return (
    <div className="nav1" ref={navRef}>
      <div className="nav1-top">
        <div className="nav1-bar">
          <ul className="nav1-menu">
            {MENU.map((m, i) => (
              <li key={m.label} className={`nav1-item ${isDropdown(m) ? "has-dd" : ""}`}>
                {isDropdown(m) ? (
                  <button
                    className="nav1-link bare"
                    onMouseEnter={(e) => openFromTarget(i, e.currentTarget)}
                    onFocus={(e) => openFromTarget(i, e.currentTarget)}
                    onClick={(e) => (openKey === i ? setOpenKey(null) : openFromTarget(i, e.currentTarget))}
                    aria-expanded={openKey === i}
                  >
                    <span className="nav1-text">{m.label}</span>
                    <span className={`arrow ${openKey === i ? "up" : ""}`}>▾</span>
                  </button>
                ) : (
                  <a
                    className="nav1-link bare"
                    href={m.href}
                    onMouseEnter={() => setOpenKey(null)}
                    onFocus={() => setOpenKey(null)}
                  >
                    <span className="nav1-text">{m.label}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {openKey !== null && MENU[openKey] && MENU[openKey].items && (
        <div
          ref={panelRef}
          className="dropdown-panel"
          style={{ top: `${panelPos.top}px`, left: `${panelPos.left}px` }}
          onMouseEnter={() => setOpenKey(openKey)}
          onMouseLeave={() => setOpenKey(null)}
        >
          <div className="dropdown-grid">
            {MENU[openKey].items.map((it) => (
              <a key={it.label} href={it.href} className="dropdown-item">
                {it.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="nav1-bottom">
        <div className="ticker">
          <div className="ticker__track">
            204 - 2025: 669 placement offers | 2025 - 2026 (As on date) 216 offers. Delphi TVS: 105, Wheels India: 24, TAFE: 11, Schneider: 09, Valeo India Pvt. Ltd.: 25, Yazaki India Pvt. Ltd.: 24, Swelect: 18 (All come with pre-placement offers + Stipend ranging from INR 15000++)
          </div>
        </div>
      </div>

      {drawer && (
        <div className="nav1-drawer">
          <div className="drawer-header">
            <button className="drawer-close" onClick={() => setDrawer(false)}>✕</button>
          </div>
          <div className="drawer-content">
            {MENU.map((m, i) =>
              isDropdown(m) ? (
                <div key={m.label} className="acc">
                  <button
                    className={`acc-head ${accordionOpen === i ? "open" : ""}`}
                    onClick={() => setAccordionOpen(accordionOpen === i ? null : i)}
                    aria-expanded={accordionOpen === i}
                  >
                    <span>{m.label}</span>
                    <span className="acc-arrow">{accordionOpen === i ? "▴" : "▾"}</span>
                  </button>
                  {accordionOpen === i && (
                    <div className="acc-body">
                      {m.items.map((it) => (
                        <a key={it.label} href={it.href} className="acc-link" onClick={() => setDrawer(false)}>
                          {it.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={m.label} href={m.href} className="drawer-link" onClick={() => setDrawer(false)}>
                  {m.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
