"use client";

const technicalSkills = [
  {
    area: "Frontend",
    techs: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 70 },
      { name: "JavaScript", level: 60 },
      { name: "TypeScript", level: 50 },
      { name: "React", level: 70 },
      { name: "Next.js", level: 50 },
    ],
  },
  {
    area: "Mobile",
    techs: [
      { name: "React Native", level: 50 },
      { name: "Expo", level: 40 },
    ],
  },
  {
    area: "Backend",
    techs: [
      { name: "Node.js", level: 50 },
      { name: "Express", level: 40 },
      { name: "Python", level: 70 },
    ],
  },
  {
    area: "Base de datos",
    techs: [
      { name: "SQL", level: 45 },
      { name: "PostgreSQL", level: 30 },
    ],
  },
  {
    area: "Herramientas",
    techs: [
      { name: "GitHub", level: 70 },
      { name: "Git", level: 50 },
    ],
  },
];

const softSkills = [
  "Iniciativa y proactividad",
  "Transferencia de conocimientos",
  "Trabajo bajo presión",
  "Trabajo en equipo multidisciplinario",
  "Cumplimiento de estándares y normativas",
  "Resolución de problemas",
  "Aprendizaje autónomo",
  "Comunicación efectiva",
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginBottom: "6px",
      }}>
        <span style={{ fontSize: "12px", color: "#7A7570", letterSpacing: "0.04em" }}>
          {name}
        </span>
        <span style={{ fontSize: "10px", color: "#5A5550", letterSpacing: "0.06em" }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: "2px",
        background: "rgba(255,255,255,0.06)",
        borderRadius: "2px",
        overflow: "hidden",
      }}>
        <div style={{
          width: `${level}%`,
          height: "100%",
          background: "linear-gradient(90deg, #D4A89A, rgba(212,168,154,0.4))",
          borderRadius: "2px",
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section" style={{
      padding: "60px 56px 100px",
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
          02
        </div>
        <span style={{
          fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#7A7570", marginBottom: "14px", display: "block",
        }}>
          Stack técnico
        </span>
        <h2 style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 300, letterSpacing: "-0.02em", color: "#F2EEE8",
        }}>
          Tecnologías que{" "}
          <em style={{ fontStyle: "italic", color: "#D4A89A" }}>domino</em>
        </h2>
      </div>

      <div style={{ marginBottom: "80px" }}>
        <span style={{
          fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#7A7570", display: "block", marginBottom: "32px",
        }}>
          Habilidades técnicas
        </span>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "48px 64px",
        }}>
          {technicalSkills.map((category, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "26px", fontWeight: 400,
                color: "#D4A89A", letterSpacing: "-0.01em",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(212,168,154,0.15)",
              }}>
                {category.area}
              </div>
              {category.techs.map((tech) => (
                <SkillBar key={tech.name} name={tech.name} level={tech.level} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div>
        <span style={{
          fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#7A7570", display: "block", marginBottom: "24px",
        }}>
          Habilidades blandas
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {softSkills.map((skill) => (
            <span
              key={skill}
              style={{
                fontSize: "13px", padding: "10px 20px",
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
              {skill}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-section { padding: 60px 24px 80px !important; }
        }
      `}</style>
    </section>
  );
}
