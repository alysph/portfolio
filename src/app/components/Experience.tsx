"use client";

const experiences = [
  {
    type: "Experiencia Laboral",
    role: "Técnico en Procesos Productivos — CLP $20.000, $10.000 y $1.000",
    company: "Casa de Moneda de Chile S.A.",
    period: "Febrero 2025 — Enero 2026",
    desc: "Participación en proyecto nacional de alta escala para el Banco Central de Chile, en la producción de más de 340 millones de billetes. Operación simultánea de BPS X9 y BPS 2000 de Giesecke+Devrient. Capacitación teórico-práctica en BPS X9 con software NotaMaster® Image, impartida por Michael Yung, experto internacional en sistemas de procesamiento y clasificación de billetes de Giesecke+Devrient.",
    tasks: [
      "Operación y configuración del sistema NotaMaster® Image (OISUI) — sensores LRGB, RRGB, LIR, RIR y transmisión — para inspección óptica en tiempo real, incluyendo árbol de inspección, máscaras y regiones de detección de billetes no aptos",
      "Administración del Training Set: gestión del conjunto de imágenes de referencia para entrenamiento del sistema por denominación",
      "Creación y gestión de órdenes de producción (PO) en QICC",
      "Análisis de estadísticas de producción y tasas de billetes aptos, no aptos, especiales y rechazados",
      "Inspección UV y Magnetismo según especificaciones del Banco Central de Chile, trabajando en conjunto con Control de Calidad",
      "Operación simultánea de BPS X9 y BPS 2000 en línea de producción",
      "Gestión completa del flujo de datos: extracción de archivos RAR mediante conexión de QICC con Filezilla, limpieza de Excel de producción y generación de listados de Pallet",
      "Control de fajos descartados y registro de trazabilidad para asegurar integridad del paletizado",
      "Diseño e impresión de etiquetas personalizadas en Zebra ZM400 y ZT230 mediante BarTender, según especificaciones técnicas del Banco Central de Chile",
      "Generación de reportes de balance por lote y envío de estadísticas a jefatura",
      "Coordinación con Control de Calidad, Conciliación y operadoras de BPS para validación y cierre de producción",
    ],
    areas: ["BPS X9 (G&D)", "NotaMaster® Image", "OISUI", "BPS 2000", "OBIS 3", "QICC", "UV · Magnetismo", "BarTender", "Zebra ZM400 · ZT230", "Excel avanzado", "Trazabilidad", "Control de calidad", "Proyecto nacional de alta escala"],
    highlight: null,
    supervisor: null,
  },
  {
    type: "Experiencia Laboral",
    role: "Técnico en Procesos Productivos RD $50",
    company: "Casa de Moneda de Chile S.A.",
    period: "Octubre 2024 — Enero 2025",
    desc: "Participación en proyecto internacional de alta precisión para el Banco Central de la República Dominicana, en la producción de 55 millones de billetes. Operación del sistema BPS 2000 con módulo de inspección óptica OBIS 3 (Optical Banknote Inspection System) de Giesecke & Devrient, sistema de clase mundial utilizado por bancos centrales e imprentas de billetes a nivel global.",
    tasks: [
      "Operación del sistema BPS 2000 con módulos de inspección OBIS 3 y QICC para clasificación automatizada de billetes (Aptos, No Aptos, Rechazados y Especiales)",
      "Configuración y monitoreo del software OISUI para inspección óptica mediante sensores de color, infrarrojo y transparencia en anverso y reverso",
      "Gestión de campaña completa: configuración MAKONF, propiedades QICC, inicio de turno y control de lotes (IPP)",
      "Extracción y procesamiento de archivos .ZIP generados por el sistema al cierre de cada lote mediante software especializado",
      "Limpieza y tratamiento de Excel de producción: filtrado de billetes buenos, registro de fajos descartados y control de errores para asegurar integridad del paletizado",
      "Generación de listados de Pallet para entrega a operadoras de embalaje y supervisores de turno",
      "Impresión de etiquetas con código de barras en Zebra ZM400 y ZT230 con base de datos configurada en BarTender, según especificaciones del Banco Central de República Dominicana",
      "Análisis de reportes de cuadratura por lote y envío de estadísticas a jefatura",
      "Control de series numéricas duplicadas y generación de entregables al cliente",
      "Calibración FFC (Flat Field Correction) de sensores para garantizar precisión en la inspección óptica",
      "Administración del Training Set: gestión del conjunto de imágenes de referencia para entrenamiento del sistema por denominación",
      "Coordinación con Control de Calidad y Conciliación para validación y cierre de producción",
    ],
    areas: ["BPS 2000", "OBIS 3 (G&D)", "QICC", "OISUI", "Control de calidad", "Trazabilidad", "Excel avanzado", "Reportería", "Inspección óptica", "BarTender", "Zebra ZM400 · ZT230", "Conciliación", "Proyecto internacional"],
    highlight: null,
    supervisor: null,
  },
  {
    type: "Experiencia Laboral",
    role: "Especialista en Producción Electoral",
    company: "Casa de Moneda de Chile S.A.",
    period: "Septiembre 2024 — Octubre 2024",
    desc: "Participación en campaña oficial SERVEL para la producción y control de documentos electorales para las elecciones generales 2024. Trabajo con herramientas de automatización, impresión industrial y procesamiento masivo de datos bajo estrictos estándares de calidad y precisión.",
    tasks: [
      "Generación de bases para impresión de folios en distintos tipos de cédulas electorales mediante macros VBA en Excel",
      "Limpieza y procesamiento de bases de datos enviadas por SERVEL para impresión de etiquetas",
      "Impresión de etiquetas de fajos y cajas según lineamientos SERVEL usando software BarTender",
      "Operación de impresoras industriales Zebra ZM400 para etiquetas de fajo y caja",
      "Coordinación de impresión por región según requerimientos electorales",
    ],
    areas: ["Macros VBA (Excel)", "BarTender", "Zebra ZM400", "Procesamiento de datos", "Automatización", "Impresión industrial", "Control de calidad", "Gestión electoral"],
    highlight: null,
    supervisor: null,
  },
  {
    type: "Práctica Profesional",
    role: "Desarrolladora en Práctica",
    company: "Casa de Moneda de Chile S.A.",
    period: "Mayo 2024 — Agosto 2024",
    desc: "Práctica profesional en el área de desarrollo tecnológico, con participación activa en proyectos de automatización de procesos, desarrollo web interno y gestión de datos institucionales.",
    tasks: [
      "Desarrollo de aplicativo para tratamiento de archivos y permisos de circulación (Python)",
      "Implementación de calculadora universal en sitio web interno",
      "Desarrollo en aplicativo de reposición de votos para SERVEL",
      "Apoyo en implementación de Dashboard KPI en sitio web interno",
      "Carga de imágenes y programación en Visual Studio para sitio web interno",
      "Apoyo en base de datos SERVEL y análisis de fallas en sitio web",
    ],
    areas: ["Automatización de procesos", "Desarrollo web interno", "Python", "Gestión de datos", "Dashboard KPI", "Mejora continua", "Visual Studio", "SQL / Bases de datos"],
    highlight: null,
    supervisor: null,
  },
];

const education = [
  {
    degree: "Ingeniería en Informática",
    institution: "Instituto Profesional DuocUC",
    period: "2020 — 2025",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="exp-section" style={{
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
          04
        </div>
        <span style={{
          fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#7A7570", marginBottom: "14px", display: "block",
        }}>
          Trayectoria
        </span>
        <h2 style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 300, letterSpacing: "-0.02em", color: "#F2EEE8",
        }}>
          Experiencia & <em style={{ fontStyle: "italic", color: "#D4A89A" }}>Educación</em>
        </h2>
      </div>

      <div className="exp-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 300px",
        gap: "80px",
        alignItems: "start",
      }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: "32px",
            }}>
              <div style={{
                display: "flex", alignItems: "flex-start",
                justifyContent: "space-between", gap: "24px",
                marginBottom: "20px", flexWrap: "wrap",
              }}>
                <div>
                  <div style={{
                    fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "#7A7570", marginBottom: "8px",
                  }}>
                    {exp.type}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "26px", fontWeight: 400,
                    color: "#F2EEE8", letterSpacing: "-0.01em",
                    marginBottom: "4px",
                  }}>
                    {exp.role}
                  </div>
                  <div style={{ fontSize: "13px", color: "#D4A89A", fontWeight: 300 }}>
                    {exp.company}
                  </div>
                </div>
                <div style={{
                  fontSize: "11px", color: "#7A7570",
                  letterSpacing: "0.06em", whiteSpace: "nowrap",
                  paddingTop: "4px",
                }}>
                  {exp.period}
                </div>
              </div>

              <p style={{
                fontSize: "14px", color: "#7A7570",
                lineHeight: 1.9, marginBottom: "24px", fontWeight: 300,
              }}>
                {exp.desc}
              </p>

              <div style={{ marginBottom: "28px" }}>
                {exp.tasks.map((task, j) => (
                  <div key={j} style={{
                    display: "flex", alignItems: "flex-start", gap: "12px",
                    padding: "10px 0",
                    borderTop: j === 0 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}>
                    <div style={{
                      width: "4px", height: "4px", borderRadius: "50%",
                      background: "#D4A89A", opacity: 0.5,
                      marginTop: "7px", flexShrink: 0,
                    }} />
                    <span style={{ fontSize: "13px", color: "#7A7570", lineHeight: 1.7, fontWeight: 300 }}>
                      {task}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: exp.highlight ? "28px" : "0" }}>
                <div style={{
                  fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "#D4A89A", marginBottom: "12px",
                }}>
                  Áreas & tecnologías
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {exp.areas.map((area) => (
                    <span key={area} style={{
                      fontSize: "11px", padding: "5px 13px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#7A7570", borderRadius: "2px",
                      letterSpacing: "0.04em",
                      transition: "all 0.2s", cursor: "default",
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = "rgba(212,168,154,0.3)";
                        e.currentTarget.style.color = "#D4A89A";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.color = "#7A7570";
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {exp.highlight && (
                <div style={{
                  borderLeft: "1px solid rgba(212,168,154,0.3)",
                  paddingLeft: "20px",
                  marginTop: "28px",
                }}>
                  <p style={{
                    fontSize: "13px", color: "#7A7570",
                    lineHeight: 1.8, fontStyle: "italic", fontWeight: 300,
                  }}>
                    &ldquo;{exp.highlight}&rdquo;
                  </p>
                  <span style={{
                    fontSize: "10px", color: "#7A7570",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    marginTop: "8px", display: "block",
                  }}>
                    — {exp.supervisor}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          <div style={{
            fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#7A7570", marginBottom: "24px",
          }}>
            Educación
          </div>
          {education.map((edu, i) => (
            <div key={i} style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: "24px",
            }}>
              <div style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "22px", fontWeight: 400,
                color: "#F2EEE8", letterSpacing: "-0.01em",
                marginBottom: "6px",
              }}>
                {edu.degree}
              </div>
              <div style={{ fontSize: "13px", color: "#D4A89A", fontWeight: 300, marginBottom: "4px" }}>
                {edu.institution}
              </div>
              <div style={{ fontSize: "11px", color: "#7A7570", letterSpacing: "0.06em" }}>
                {edu.period}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-section { padding: 80px 24px !important; }
          .exp-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
