// ─── sections/shared.jsx ─────────────────────────────────────────────────────
// Hooks y componentes pequeños que usan varias secciones.
// Se importan desde aquí para no repetir código.

import { useState, useEffect } from "react";

// Detecta si un elemento entró en la pantalla (para animar al hacer scroll)
// eslint-disable-next-line react-refresh/only-export-components
export function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

// Línea divisora con label — usada al inicio de cada sección
export function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-lime-400 text-xs">&gt;</span>
      <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">{children}</span>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>
  );
}