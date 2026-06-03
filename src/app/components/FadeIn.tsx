"use client";

import { useEffect, useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "none";
}

export default function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("fade-in-visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <>
      <div ref={ref} className={`fade-in-base fade-in-${direction}`}>
        {children}
      </div>
      <style>{`
        .fade-in-base {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-in-up {
          transform: translateY(32px);
        }
        .fade-in-left {
          transform: translateX(-32px);
        }
        .fade-in-none {
          transform: none;
        }
        .fade-in-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </>
  );
}
