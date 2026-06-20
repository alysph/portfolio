"use client";

import { useState, useEffect, useRef } from "react";

const techs = [
  { name: "React Native", size: 18, weight: 700 },
  { name: "Next.js", size: 16, weight: 600 },
  { name: "TypeScript", size: 15, weight: 600 },
  { name: "HTML", size: 20, weight: 700 },
  { name: "CSS", size: 18, weight: 700 },
  { name: "JavaScript", size: 19, weight: 700 },
  { name: "Node.js", size: 14, weight: 400 },
  { name: "Python", size: 14, weight: 400 },
  { name: "PostgreSQL", size: 13, weight: 400 },
  { name: "SQL", size: 15, weight: 500 },
  { name: "GitHub", size: 13, weight: 400 },
  { name: "Django", size: 13, weight: 400 },
  { name: "Ionic", size: 13, weight: 400 },
  { name: "Angular", size: 13, weight: 400 },
];

function TechCloud() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const angleRef = useRef<{ theta: number; phi: number }[]>([]);
  const rotationRef = useRef({ x: 0.003, y: 0.005 });
  const mousePosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;
    const cx = W / 2;
    const cy = H / 2;
    const radius = Math.min(W, H) * 0.46;

    angleRef.current = techs.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / techs.length);
      const theta = Math.sqrt(techs.length * Math.PI) * phi;
      return { theta, phi };
    });

    let points = angleRef.current.map(({ theta, phi }) => ({
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.sin(phi) * Math.sin(theta),
      z: Math.cos(phi),
    }));

    const rotateX = (pts: typeof points, angle: number) =>
      pts.map(p => ({
        x: p.x,
        y: p.y * Math.cos(angle) - p.z * Math.sin(angle),
        z: p.y * Math.sin(angle) + p.z * Math.cos(angle),
      }));

    const rotateY = (pts: typeof points, angle: number) =>
      pts.map(p => ({
        x: p.x * Math.cos(angle) + p.z * Math.sin(angle),
        y: p.y,
        z: -p.x * Math.sin(angle) + p.z * Math.cos(angle),
      }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      points = rotateX(points, rotationRef.current.x);
      points = rotateY(points, rotationRef.current.y);

      const sorted = points
        .map((p, i) => ({ ...p, i }))
        .sort((a, b) => b.z - a.z);

      sorted.forEach(({ x, y, z, i }) => {
        const tech = techs[i];
        const scale = (z + 1.5) / 2.5;
        const opacity = 0.15 + scale * 0.85;
        const fontSize = Math.round(tech.size * scale);

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.font = `${tech.weight} ${fontSize}px 'Cormorant Garamond', Georgia, serif`;
        ctx.fillStyle = `rgba(212, 168, 154, ${opacity})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(tech.name, cx + x * radius, cy + y * radius);
        ctx.restore();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left - cx;
      const my = e.clientY - rect.top - cy;
      rotationRef.current = {
        x: my * 0.00005,
        y: mx * 0.00005,
      };
    };

    const onMouseLeave = () => {
      rotationRef.current = { x: 0.003, y: 0.005 };
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "480px", cursor: "default" }}
    />
  );
}

export default function About() {
  const [showCV, setShowCV] = useState(false);

  return (
    <section
      id="sobre-mí"
      className="about-section"
      style={{
        padding: "120px 56px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gap: "80px",
        alignItems: "start",
      }}
    >
      <div style={{ position: "relative" }}>
        <div style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "72px", fontWeight: 300, fontStyle: "italic",
          color: "rgba(212,168,154,0.25)",
          lineHeight: 1, letterSpacing: "-0.04em",
          marginBottom: "20px",
        }}>
          01
        </div>
        <span style={{
          fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#7A7570", marginBottom: "14px", display: "block",
        }}>
          Sobre mí
        </span>
        <h2 style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(30px, 3.5vw, 40px)",
          fontWeight: 300, lineHeight: 1.15,
          color: "#F2EEE8", letterSpacing: "-0.01em",
          marginBottom: "40px",
        }}>
          Construyo con{" "}
          <em style={{ fontStyle: "italic", color: "#D4A89A" }}>intención</em>{" "}
          y precisión
        </h2>

        <div style={{ position: "relative", width: "160px", marginBottom: "40px" }}>
          <div style={{
            borderRadius: "50%",
            border: "1px solid rgba(212,168,154,0.15)",
            position: "absolute",
            top: "-8px", left: "-8px",
            width: "176px", height: "176px",
          }} />
          <div style={{
            width: "160px", height: "160px",
            borderRadius: "50%",
            background: "rgba(212,168,154,0.05)",
            border: "1px solid rgba(212,168,154,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <span style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "52px",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#D4A89A",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              position: "relative",
              zIndex: 2,
            }}>
              AU
            </span>
            <div style={{
              position: "absolute",
              width: "200%",
              height: "1px",
              background: "rgba(212,168,154,0.06)",
              transform: "rotate(-35deg)",
              top: "50%",
            }} />
          </div>
          <div style={{
            position: "absolute",
            bottom: "8px", right: "-4px",
            width: "8px", height: "8px",
            borderRadius: "50%",
            background: "#D4A89A",
            boxShadow: "0 0 10px rgba(212,168,154,0.5)",
          }} />
        </div>

        <div style={{ marginBottom: "32px" }}>
          <span style={{
            fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
            color: "#7A7570", display: "block", marginBottom: "12px",
          }}>
            Intereses
          </span>
          <p style={{ fontSize: "12px", color: "#7A7570", lineHeight: 1.8, fontWeight: 300 }}>
            <span style={{ color: "#D4A89A" }}>Tecnología & creatividad</span>
            {" — "}Programar · Crear proyectos · Aprender cosas nuevas · Diseñar · Innovar
          </p>
          <p style={{ fontSize: "12px", color: "#7A7570", lineHeight: 1.8, fontWeight: 300 }}>
            <span style={{ color: "#D4A89A" }}>Tiempo libre</span>
            {" — "}Leer · Gaming · Series · Museos · Viajar · Café
          </p>
        </div>

        <button
          onClick={() => setShowCV(!showCV)}
          style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "none",
            border: "1px solid rgba(212,168,154,0.3)",
            color: "#D4A89A",
            padding: "10px 18px",
            borderRadius: "2px",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(212,168,154,0.08)";
            e.currentTarget.style.borderColor = "rgba(212,168,154,0.6)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "none";
            e.currentTarget.style.borderColor = "rgba(212,168,154,0.3)";
          }}
        >
          {showCV ? "✕ Cerrar CV" : "↓ Ver mi CV"}
        </button>
      </div>

      <div>
        <p style={{
          fontSize: "14px", color: "#7A7570", lineHeight: 1.95,
          marginBottom: "20px", fontWeight: 300,
        }}>
          Soy Alison, Ingeniera en Informática en Santiago. Empecé a programar en 2020 cuando comencé mi carrera profesional y desde entonces no paré — construí apps móviles, sitios web, automaticé procesos y trabajé con datos en proyectos para el Banco Central de Chile y República Dominicana desde Casa de Moneda de Chile S.A.
        </p>
        <p style={{
          fontSize: "14px", color: "#7A7570", lineHeight: 1.95,
          marginBottom: "20px", fontWeight: 300,
        }}>
          Me desenvuelvo en desarrollo de software, automatización de procesos y análisis de datos. Pero lo que más me define no es la tecnología que uso, sino cómo la uso... con cuidado, con lógica, con ganas de que las cosas funcionen bien y con calidad.
        </p>
        <p style={{
          fontSize: "14px", color: "#7A7570", lineHeight: 1.95,
          marginBottom: "32px", fontWeight: 300,
        }}>
          Hoy estoy construyendo mi portafolio y buscando el equipo donde pueda seguir creciendo y aportar de verdad.
        </p>

        <div style={{
  width: "100%", height: "1px",
  background: "#D4A89A", opacity: 0.3,
  margin: "24px 0",
}} />

        <TechCloud />

        {showCV && (
          <div style={{
            marginTop: "40px",
            border: "1px solid rgba(212,168,154,0.2)",
            borderRadius: "4px",
            overflow: "hidden",
          }}>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "12px 16px",
              borderBottom: "1px solid rgba(212,168,154,0.15)",
              background: "rgba(212,168,154,0.04)",
            }}>
              <span style={{ fontSize: "11px", color: "#7A7570", letterSpacing: "0.08em" }}>
                Alison Urrea Huerta — CV
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <a href="/Alison_Urrea_CV.pdf" download style={{
                  fontSize: "11px", color: "#D4A89A",
                  textDecoration: "none", letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  ↓ Descargar
                </a>
                <button
                  onClick={() => setShowCV(false)}
                  style={{
                    background: "none", border: "none",
                    color: "#7A7570", fontSize: "16px",
                    cursor: "pointer", padding: "0",
                    lineHeight: 1, fontFamily: "inherit",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#F2EEE8"}
                  onMouseLeave={e => e.currentTarget.style.color = "#7A7570"}
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe
              src="/Alison_Urrea_CV.pdf"
              width="100%"
              height="600px"
              style={{ display: "block", border: "none" }}
            />
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-section {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
