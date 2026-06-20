"use client";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "58px 56px 0",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Texto de fondo decorativo */}
      <div className="hero-bg-text" style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -54%)",
        fontFamily: "var(--font-cormorant)",
        fontWeight: 300,
        fontStyle: "italic",
        color: "rgba(255,255,255,0.022)",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        letterSpacing: "-0.04em",
        userSelect: "none",
        fontSize: "clamp(100px, 22vw, 300px)",
      }}>
        Alison
      </div>

      <div style={{
        position: "relative", zIndex: 2,
        paddingBottom: "72px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
          <div style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "#D4A89A",
            boxShadow: "0 0 10px #D4A89A",
            animation: "blink 3s ease-in-out infinite",
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#7A7570", fontWeight: 400,
          }}>
            Disponible para nuevas oportunidades
          </span>
        </div>

        <div className="hero-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "flex-end",
          gap: "32px",
        }}>
          <h1 style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(64px, 9vw, 120px)",
            fontWeight: 300,
            lineHeight: 0.88,
            letterSpacing: "-0.025em",
            color: "#F2EEE8",
          }}>
            Alison
            <span style={{
              fontStyle: "italic",
              color: "#D4A89A",
              display: "block",
              marginTop: "4px",
            }}>
              Urrea
            </span>
          </h1>

          <div className="hero-aside" style={{
            textAlign: "right",
            display: "flex", flexDirection: "column", gap: "6px",
            maxWidth: "240px", paddingBottom: "6px",
          }}>
            <div style={{
              fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#7A7570",
            }}>
              Ingeniera en informática
            </div>
            <div style={{ fontSize: "13px", color: "#9A9490", lineHeight: 1.85 }}>
              Desarrollo de software, automatización de procesos y análisis de datos.
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bar" style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}>
        {[
          { label: "Nombre", value: "Alison Urrea Huerta" },
          { label: "Ubicación", value: "Santiago, Chile" },
          { label: "Especialidad", value: "Desarrollo · Datos · Automatización" },
          { label: "Stack", value: "Python · SQL · React Native · TypeScript · HTML · CSS · JS" },
        ].map((item, i) => (
          <div key={i} style={{
            padding: "18px 0",
            paddingLeft: i === 0 ? 0 : "16px",
            borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}>
            <div style={{
              fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#5A5550", marginBottom: "4px",
            }}>
              {item.label}
            </div>
            <div style={{ fontSize: "13px", color: "#9A9490", fontWeight: 300 }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 768px) {
          .hero-aside { display: none !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-bar { grid-template-columns: repeat(2, 1fr) !important; }
          .hero-bg-text { display: none !important; }
          section { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </section>
  );
}
