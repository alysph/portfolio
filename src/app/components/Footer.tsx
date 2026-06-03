"use client";

export default function Footer() {
  return (
    <footer className="footer-section" style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "20px 56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "8px",
    }}>
      <div style={{
        fontFamily: "var(--font-cormorant)",
        fontSize: "14px", fontStyle: "italic",
        color: "#3A3530", letterSpacing: "0.04em",
      }}>
        Alison Urrea
      </div>
      <div style={{ fontSize: "11px", color: "#3A3530", letterSpacing: "0.06em" }}>
        © 2025 · Santiago, Chile
      </div>
      <div style={{ fontSize: "11px", color: "#3A3530", letterSpacing: "0.06em" }}>
        Fullstack Developer
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-section {
            padding: 20px 24px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
          }
        }
      `}</style>
    </footer>
  );
}
