"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Sobre mí", href: "#sobre-mí" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = links.map(l => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center",
        padding: "0 56px", height: "58px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(8,8,8,0.92)",
        backdropFilter: "blur(20px)",
      }}>
        <div style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "16px", fontWeight: 400, fontStyle: "italic",
          color: "#D4A89A", letterSpacing: "0.04em",
        }}>
          Alison Urrea
        </div>

        <ul className="nav-desktop" style={{ display: "flex", gap: "36px", listStyle: "none", flex: 1, justifyContent: "center" }}>
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    color: isActive ? "#D4A89A" : "#7A7570",
                    fontSize: "11px", fontWeight: isActive ? 500 : 400,
                    letterSpacing: "0.12em", textTransform: "uppercase" as const,
                    transition: "color 0.25s",
                    position: "relative",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#F2EEE8")}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive ? "#D4A89A" : "#7A7570")}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: "absolute",
                      bottom: "-4px", left: "0", right: "0",
                      height: "1px",
                      background: "#D4A89A",
                    }} />
                  )}
                </a>
              </li>
            );
          })}
        </ul>



        <button
          className="nav-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#7A7570", fontSize: "20px", padding: "4px",
            display: "none",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div
          style={{
            position: "fixed", top: "58px", left: 0, right: 0, zIndex: 99,
            background: "rgba(8,8,8,0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "24px 32px",
            flexDirection: "column", gap: "20px",
            display: "flex",
          }}
          className="nav-mobile-menu"
        >
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  color: isActive ? "#D4A89A" : "#7A7570",
                  fontSize: "13px", fontWeight: 400,
                  letterSpacing: "0.12em", textTransform: "uppercase" as const,
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
          .nav-mobile-menu { display: flex !important; }
          nav { padding: 0 24px !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}
