import React, { useEffect, useRef, useState } from "react";
import "./Navbar1.css";

const MENU = [
  { label: "Home", href: "#home" },
  {
    label: "About",
    items: [
      { label: "Management", href: "#management" },
      { label: "Leadership", href: "#leadership" },
      { label: "Nadimpalli Informatics LLP", href: "#aves" }
    ]
  },
  {
    label: "Governance",
    items: [
      { label: "Organogram", href: "#organogram" },
      { label: "Governing Body", href: "#governing-body" },
      { label: "Institutional Committees", href: "#academic-council" }
    ]
  },
  {
    label: "Admissions",
    items: [
      { label: "Why NSRIET ?", href: "#why-nsrit" },
      { label: "Undergraduate Programs", href: "#ug" },
      { label: "Postgraduate Programs", href: "#pg" }
    ]
  },
  {
    label: "Academics",
    items: [
      { label: "Outcome Based Education (OBE)", href: "#obe" },
      { label: "Best Practices", href: "#best-practices" },
      { label: "LMS", href: "#lms" },
      { label: "Academic Calendar", href: "#calendar" },
      { label: "Knowledge Resource Center (Library)", href: "#library" },
      {
        label: "Programs",
        href: "#programs",
        subitems: [
          { label: "Computer Science & Engineering", href: "#cse" },
          { label: "CSE (AI & ML)", href: "#cse-aiml" },
          { label: "Electronics & Communication Engineering", href: "#ece" },
          { label: "Electrical & Electronics Engineering", href: "#eee" },
          { label: "Mechanical Engineering", href: "#mech" }
        ]
      }
    ]
  },
  { label: "IIC", href: "#research" },
  { label: "Industry Connect & Collaborations", href: "#arr" },
  {
    label: "CDC",
    items: [
      { label: "About CDC", href: "#about-cdc" },
      { label: "Career Guidance & Counseling", href: "#career-guidance" },
      { label: "Skill Development & Training", href: "#skill-development" },
      { label: "Internship & Apprenticeships", href: "#internships" },
      { label: "Placements", href: "#placements" },
      { label: "Higher Education Support", href: "#higher-education" },
      { label: "Resources & Support", href: "#resources-support" },
      { label: "Announcements & Events", href: "#announcements" },
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
      { label: "Campus Life", href: "#campus-life" },
      { label: "Clubs & Societies", href: "#clubs-societies" },
      { label: "Institution Policy Documents", href: "#policy-docs" },
      { label: "NSS", href: "#nss" },
      { label: "Contact", href: "#partner-institution" }
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
  const [hoveredItem, setHoveredItem] = useState(null);
  const [subOpen, setSubOpen] = useState({});

  const itemHasSub = (item) => Array.isArray(item?.subitems) && item.subitems.length > 0;
  const isDropdown = (m) => Array.isArray(m.items);
  const menuHasSecondLevel = (idx) => (MENU[idx]?.items || []).some(itemHasSub);
  const hoveredHasSub = () => {
    if (openKey === null || !hoveredItem) return false;
    const it = (MENU[openKey].items || []).find((t) => t.label === hoveredItem);
    return itemHasSub(it);
  };

  const placePanel = (panelWidth) => {
    if (!anchorRef.current || !panelRef.current) return;
    const r = anchorRef.current.getBoundingClientRect();
    const desired = { top: r.bottom, left: r.left };
    const panelW = panelWidth || panelRef.current.offsetWidth || 320;
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
        setHoveredItem(null);
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
        setHoveredItem(null);
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
      setHoveredItem(null);
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

  useEffect(() => {
    if (openKey !== null) {
      const width = hoveredHasSub() ? 560 : 320;
      placePanel(width);
    }
  }, [hoveredItem]);

  const openFromTarget = (i, target) => {
    anchorRef.current = target;
    setOpenKey(i);
    setTimeout(placePanel, 0);
  };

  const toggleSub = (label) => setSubOpen((p) => ({ ...p, [label]: !p[label] }));

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
                    onMouseEnter={() => { setOpenKey(null); setHoveredItem(null); }}
                    onFocus={() => { setOpenKey(null); setHoveredItem(null); }}
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
          className={`dropdown-panel ${menuHasSecondLevel(openKey) ? "supports-sub" : ""} ${hoveredHasSub() ? "show-sub" : ""}`}
          style={{ top: `${panelPos.top}px`, left: `${panelPos.left}px` }}
          onMouseEnter={() => setOpenKey(openKey)}
          onMouseLeave={() => { setOpenKey(null); setHoveredItem(null); }}
        >
          {menuHasSecondLevel(openKey) ? (
            <div className="dropdown-two-col">
              <ul className="col-left">
                {MENU[openKey].items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className={`dropdown-item ${hoveredItem === it.label ? "active" : ""}`}
                      onMouseEnter={() => setHoveredItem(itemHasSub(it) ? it.label : null)}
                    >
                      <span>{it.label}</span>
                      {itemHasSub(it) && <span className="dd-arrow">▸</span>}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="col-right" aria-hidden={!hoveredHasSub()}>
                {MENU[openKey].items
                  .filter((it) => it.label === hoveredItem && itemHasSub(it))
                  .flatMap((it) => it.subitems || [])
                  .map((s) => (
                    <a key={s.label} href={s.href} className="dropdown-item">
                      {s.label}
                    </a>
                  ))}
              </div>
            </div>
          ) : (
            <div className="dropdown-grid">
              {MENU[openKey].items.map((it) => (
                <a key={it.label} href={it.href} className="dropdown-item">
                  {it.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/*<div className="nav1-bottom">
        <div className="ticker">
          <div className="ticker__track">
            Coming soon National Level Technical Fest - TechSurge 2025
          </div>
        </div>
      </div> */}

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
                      {m.items.map((it) =>
                        itemHasSub(it) ? (
                          <div key={it.label} className="acc-sub">
                            <button
                              className={`acc-head sub ${subOpen[it.label] ? "open" : ""}`}
                              onClick={() => toggleSub(it.label)}
                              aria-expanded={!!subOpen[it.label]}
                            >
                              <span>{it.label}</span>
                              <span className="acc-arrow">{subOpen[it.label] ? "▴" : "▾"}</span>
                            </button>
                            {subOpen[it.label] && (
                              <div className="acc-sub-body">
                                {it.subitems.map((s) => (
                                  <a key={s.label} href={s.href} className="acc-link" onClick={() => setDrawer(false)}>
                                    {s.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <a key={it.label} href={it.href} className="acc-link" onClick={() => setDrawer(false)}>
                            {it.label}
                          </a>
                        )
                      )}
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
