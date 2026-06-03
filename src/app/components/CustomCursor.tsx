"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      dot.style.transform = "translate(-50%, -50%) scale(2)";
      dot.style.background = "#D4A89A";
      ring.style.transform = "translate(-50%, -50%) scale(1.6)";
      ring.style.borderColor = "rgba(212,168,154,0.4)";
    };

    const onMouseLeaveLink = () => {
      dot.style.transform = "translate(-50%, -50%) scale(1)";
      dot.style.background = "#F2EEE8";
      ring.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.borderColor = "rgba(242,238,232,0.2)";
    };

    const addLinkListeners = () => {
      document.querySelectorAll("a, button, [class*='proj-row'], [class*='skill-row']").forEach(el => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();
    addLinkListeners();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: "6px", height: "6px",
          borderRadius: "50%",
          background: "#F2EEE8",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.15s ease, background 0.2s ease",
          top: 0, left: 0,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: "32px", height: "32px",
          borderRadius: "50%",
          border: "1px solid rgba(242,238,232,0.2)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.3s ease, border-color 0.2s ease",
          top: 0, left: 0,
        }}
      />
      <style>{`
        @media (max-width: 768px) {
          /* Ocultar cursor personalizado en móvil */
          [data-cursor] { display: none; }
        }
        * { cursor: none !important; }
        @media (max-width: 768px) {
          * { cursor: auto !important; }
        }
      `}</style>
    </>
  );
}
