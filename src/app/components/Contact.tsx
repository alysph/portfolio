"use client";

import { useState } from "react";

const links = [
  { label: "Email", value: "alisonantoniauh@gmail.com", href: "mailto:alisonantoniauh@gmail.com" },
  { label: "GitHub", value: "github.com/alysph", href: "https://github.com/alysph" },
  { label: "LinkedIn", value: "linkedin.com/in/alisonurreahuerta", href: "https://www.linkedin.com/in/alisonurreahuerta/" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="contact-section" style={{
      padding: "60px 56px",
      borderTop: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ marginBottom: "64px" }}>
      <div style={{
        fontFamily: "var(--font-cormorant)",
        fontSize: "72px", fontWeight: 300, fontStyle: "italic",
        color: "rgba(212,168,154,0.25)",
        lineHeight: 1, letterSpacing: "-0.04em",
        marginBottom: "20px",
      }}>
        05
      </div>
      <span style={{
        fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
        color: "#7A7570", marginBottom: "14px", display: "block",
      }}>
        Contacto
      </span>
      <h2 style={{
        fontFamily: "var(--font-cormorant)",
        fontSize: "clamp(52px, 8vw, 96px)",
        fontWeight: 300, lineHeight: 0.9,
        letterSpacing: "-0.025em", color: "#F2EEE8",
      }}>
        ¿Trabajamos
        <em style={{ fontStyle: "italic", color: "#D4A89A", display: "block", marginTop: "8px" }}>
          juntos?
        </em>
      </h2>
    </div>

      <div className="contact-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "start",
      }}>

        <div>
          <p style={{
            fontSize: "14px", color: "#7A7570",
            lineHeight: 1.9, marginBottom: "32px", fontWeight: 300,
          }}>
            Estoy disponible para roles full-time, híbrido y remoto.
          </p>
          <div>
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "15px 0",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
                  const val = e.currentTarget.querySelector(".c-val") as HTMLElement;
                  if (val) val.style.color = "#D4A89A";
                  const arr = e.currentTarget.querySelector(".c-arr") as HTMLElement;
                  if (arr) { arr.style.color = "#D4A89A"; arr.style.transform = "translate(2px,-2px)"; }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
                  const val = e.currentTarget.querySelector(".c-val") as HTMLElement;
                  if (val) val.style.color = "#7A7570";
                  const arr = e.currentTarget.querySelector(".c-arr") as HTMLElement;
                  if (arr) { arr.style.color = "#7A7570"; arr.style.transform = "none"; }
                }}
              >
                <span style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#7A7570" }}>
                  {link.label}
                </span>
                <span className="c-val" style={{ fontSize: "13px", color: "#7A7570", transition: "color 0.2s", fontWeight: 300 }}>
                  {link.value}
                </span>
                <span className="c-arr" style={{ fontSize: "14px", color: "#7A7570", transition: "all 0.2s" }}>↗</span>
              </a>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
          </div>
        </div>

        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{
                fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#7A7570", display: "block", marginBottom: "8px",
              }}>
                Nombre
              </label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre"
                style={{
                  width: "100%", padding: "12px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "2px", color: "#F2EEE8",
                  fontSize: "13px", fontFamily: "inherit",
                  outline: "none", transition: "border-color 0.2s",
                }}
                onFocus={e => e.currentTarget.style.borderColor = "rgba(212,168,154,0.4)"}
                onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
              />
            </div>

            <div>
              <label style={{
                fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#7A7570", display: "block", marginBottom: "8px",
              }}>
                Correo
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="tu@correo.com"
                style={{
                  width: "100%", padding: "12px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "2px", color: "#F2EEE8",
                  fontSize: "13px", fontFamily: "inherit",
                  outline: "none", transition: "border-color 0.2s",
                }}
                onFocus={e => e.currentTarget.style.borderColor = "rgba(212,168,154,0.4)"}
                onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
              />
            </div>

            <div>
              <label style={{
                fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#7A7570", display: "block", marginBottom: "8px",
              }}>
                Mensaje
              </label>
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="Cuéntame sobre tu proyecto o propuesta..."
                rows={5}
                style={{
                  width: "100%", padding: "12px 16px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "2px", color: "#F2EEE8",
                  fontSize: "13px", fontFamily: "inherit",
                  outline: "none", transition: "border-color 0.2s",
                  resize: "vertical",
                }}
                onFocus={e => e.currentTarget.style.borderColor = "rgba(212,168,154,0.4)"}
                onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              style={{
                padding: "13px 28px",
                background: status === "loading" ? "rgba(212,168,154,0.5)" : "#D4A89A",
                color: "#080808",
                border: "none", borderRadius: "2px",
                fontSize: "11px", fontWeight: 500,
                letterSpacing: "0.12em", textTransform: "uppercase",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "opacity 0.2s",
                alignSelf: "flex-start",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => { if (status !== "loading") (e.currentTarget as HTMLButtonElement).style.opacity = "0.85"; }}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.opacity = "1"}
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "success" && (
              <p style={{ fontSize: "13px", color: "#7DBA84", fontWeight: 300 }}>
                ✓ Mensaje enviado. Te responderé pronto.
              </p>
            )}
            {status === "error" && (
              <p style={{ fontSize: "13px", color: "#D4A89A", fontWeight: 300 }}>
                Algo salió mal. Intenta escribirme directamente a alisonantoniauh@gmail.com
              </p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-section { padding: 80px 24px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        input::placeholder, textarea::placeholder { color: #7A7570; }
      `}</style>
    </section>
  );
}
