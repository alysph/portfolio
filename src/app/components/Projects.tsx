"use client";

const projects = [
  {
    num: "01",
    title: "StyleVIP",
    subtitle: "App de Barbería",
    type: "Mobile App",
    techs: ["React Native", "Expo", "TypeScript", "MercadoPago"],    
    desc: "App móvil completa para barbería con reservas en tiempo real, 3 roles de usuario (cliente, barbero, admin), pagos online y confirmaciones por correo.",
    github: "https://github.com/alysph",
    demo: null,
    status: "En desarrollo",
  },
  {
    num: "02",
    title: "NOS",
    subtitle: "Catálogo Tuning Callejero",
    type: "Frontend Web",
    techs: ["HTML", "CSS", "JavaScript", "Canvas API", "Unsplash API"],
    desc: "Catálogo interactivo de autos tuning con filtros JDM/Muscle/Euro, calculadora de potencia, comparador de builds y carrito de piezas.",
    github: "https://github.com/alysph/nos",
    demo: "https://alysph.github.io/nos",
    status: "Publicado",
  },
  {
  num: "03",
  title: "Pelushop",
  subtitle: "Primera página web · Proyecto universitario",
  type: "Frontend Web",
  techs: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "jQuery", "API REST"],
  desc: "Mi primera página web, desarrollada como proyecto universitario en DuocUC. Tienda de ropa y accesorios para mascotas con carrusel, formularios con validación, galería y consumo de API pública de indicadores económicos chilenos en tiempo real.",
  github: "https://github.com/alysph/pelushop",
  demo: "https://alysph.github.io/pelushop/",
  status: "Publicado",
},
];

export default function Projects() {
  return (
    <section id="proyectos" className="projects-section" style={{
      padding: "100px 56px",
      borderTop: "1px solid rgba(255,255,255,0.06)",
    }}>

      <div style={{ marginBottom: "56px" }}>
        <div style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "72px", fontWeight: 300, fontStyle: "italic",
          color: "rgba(212,168,154,0.25)",
          lineHeight: 1, letterSpacing: "-0.04em",
          marginBottom: "20px",
        }}>
          03
        </div>
        <span style={{
          fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#7A7570", marginBottom: "14px", display: "block",
        }}>
          Proyectos
        </span>
        <h2 style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 300, letterSpacing: "-0.02em", color: "#F2EEE8",
        }}>
          Trabajo <em style={{ fontStyle: "italic", color: "#D4A89A" }}>real</em>
        </h2>
      </div>

      <div className="proj-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px",
        marginBottom: "32px",
      }}>
        {projects.map((proj, i) => (
          <div
            key={i}
            className="proj-card"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "border-color 0.3s, transform 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(212,168,154,0.3)";
              el.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(255,255,255,0.06)";
              el.style.transform = "translateY(0)";
            }}

            
          >
            <div style={{
              background: "rgba(212,168,154,0.04)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "32px 32px 24px",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", top: "24px", right: "28px",
                color: "rgba(212,168,154,0.3)",
                lineHeight: 1,
              }}>
                {proj.num}
              </div>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase",
                color: proj.status === "Publicado" ? "#D4A89A" : "#7A7570",
                border: `1px solid ${proj.status === "Publicado" ? "rgba(212,168,154,0.3)" : "rgba(255,255,255,0.08)"}`,
                padding: "4px 10px", borderRadius: "2px",
                marginBottom: "16px",
              }}>
                {proj.status === "Publicado" && (
                  <span style={{
                    width: "5px", height: "5px", borderRadius: "50%",
                    background: "#D4A89A",
                    boxShadow: "0 0 6px rgba(212,168,154,0.6)",
                    display: "inline-block",
                  }} />
                )}
                {proj.status}
              </div>

              <div style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "32px", fontWeight: 400,
                color: "#F2EEE8", letterSpacing: "-0.02em",
                lineHeight: 1, marginBottom: "4px",
              }}>
                {proj.title}
              </div>
              <div style={{
                color: "#7A7570",
              }}>
                {proj.subtitle}
              </div>
            </div>

            <div style={{
              padding: "24px 32px",
              flex: 1, display: "flex", flexDirection: "column", gap: "16px",
            }}>
              <span style={{
                fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#5A5550",
              }}>
                {proj.type}
              </span>

              <p style={{
                fontSize: "13px", color: "#7A7570",
                lineHeight: 1.8, fontWeight: 300, flex: 1,
              }}>
                {proj.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                
                {proj.techs.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "10px", padding: "3px 10px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#5A5550", borderRadius: "2px",
                      letterSpacing: "0.04em",
                      transition: "all 0.2s", cursor: "default",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "rgba(212,168,154,0.3)";
                      e.currentTarget.style.color = "#D4A89A";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "#5A5550";
                    }}
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div style={{
                display: "flex", gap: "16px",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      fontSize: "11px", color: "#7A7570",
                      textDecoration: "none", letterSpacing: "0.08em",
                      transition: "color 0.2s",
                      display: "flex", alignItems: "center", gap: "4px",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "#D4A89A"}
                    onMouseLeave={e => e.currentTarget.style.color = "#7A7570"}
                  >
                    GitHub ↗
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      fontSize: "11px", color: "#7A7570",
                      textDecoration: "none", letterSpacing: "0.08em",
                      transition: "color 0.2s",
                      display: "flex", alignItems: "center", gap: "4px",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "#D4A89A"}
                    onMouseLeave={e => e.currentTarget.style.color = "#7A7570"}
                  >
                    Demo en vivo ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        <div style={{
          border: "1px dashed rgba(255,255,255,0.06)",
          borderRadius: "4px",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: "12px", padding: "48px",
          cursor: "pointer", minHeight: "320px",
          transition: "border-color 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(212,168,154,0.2)"}
          onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)"}
        >
          <div style={{
            width: "40px", height: "40px", borderRadius: "50%",
            border: "1px dashed rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "18px", color: "#5A5550",
          }}>+</div>
          <span style={{ fontSize: "12px", color: "#5A5550", letterSpacing: "0.06em" }}>
            Próximo proyecto
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-section { padding: 80px 24px !important; }
          .proj-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
