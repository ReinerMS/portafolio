import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

// ─── DATOS — edita esta sección con tu información real ───────────────────────
const ME = {
  name: "Reiner Mora",
  role: "Junior Developer",
  tagline: "Construyendo cosas reales mientras aprendo.",
  description:
    "Soy un desarrollador en formación apasionado por crear interfaces limpias y funcionales. Actualmente aprendiendo React, Tailwind y Node.js. Busco mi primera oportunidad profesional donde pueda seguir creciendo.",
  github: "https://github.com/ReinerMS",
  linkedin: "https://linkedin.com/in/tu-usuario",
  email: "https://www.linkedin.com/in/reiner-mora-656273209/",
};

const SKILLS = [
  "React", "JavaScript", "Tailwind CSS",
  "HTML / CSS", "Git", "Node.js",
  "Python", "SQL", "REST APIs",
];

const PROJECTS = [
  {
    id: 1,
    title: "Proyecto Alfa",
    desc: "Una app web para gestionar tareas con autenticación de usuarios y base de datos en tiempo real.",
    tech: ["React", "Firebase", "Tailwind"],
    repo: "https://github.com/tu-usuario/proyecto-alfa",
    live: "#",
  },
  {
    id: 2,
    title: "Proyecto Beta",
    desc: "API REST construida con Node.js y Express para manejar un catálogo de productos con CRUD completo.",
    tech: ["Node.js", "Express", "MongoDB"],
    repo: "https://github.com/tu-usuario/proyecto-beta",
    live: null, // sin demo live, no muestra el botón
  },
  {
    id: 3,
    title: "Proyecto Gamma",
    desc: "Portafolio personal construido desde cero con React y Tailwind, enfocado en rendimiento y diseño.",
    tech: ["React", "Tailwind", "Vite"],
    repo: "https://github.com/tu-usuario/proyecto-gamma",
    live: "#",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

// Hook que anima un texto caracter por caracter (efecto "máquina de escribir")
function useTypewriter(text, speed = 50, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

// Hook que detecta si un elemento es visible en la pantalla (para animaciones al hacer scroll)
function useInView(ref) {
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

// ─── SECCIÓN HERO ─────────────────────────────────────────────────────────────
function Hero() {
  const line1 = useTypewriter(`> Hola, soy`, 60, 300);
  const line2 = useTypewriter(ME.name, 70, 1200);
  const line3 = useTypewriter(ME.tagline, 40, 2400);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto overflow-hidden">

      {/* Cuadrícula de fondo — igual que en el 404 */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#a3e635 1px, transparent 1px), linear-gradient(90deg, #a3e635 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-lime-500 opacity-5 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Línea 1 */}
        <p className="font-mono text-lime-400 text-sm md:text-base mb-2 h-6">
          {line1.displayed}
          {!line1.done && <span className="animate-pulse">▍</span>}
        </p>

        {/* Nombre grande */}
        <h1 className="font-mono font-black text-white text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-4 h-24 md:h-32">
          {line2.displayed}
          {line1.done && !line2.done && <span className="animate-pulse text-lime-400">▍</span>}
        </h1>

        {/* Tagline */}
        <p className="font-mono text-zinc-400 text-base md:text-xl max-w-xl mb-10 min-h-7">
          {line3.displayed}
          {line2.done && !line3.done && <span className="animate-pulse text-lime-400">▍</span>}
        </p>

        {/* Botones y redes — aparecen cuando termina la animación */}
        <div
          className="flex flex-wrap items-center gap-4 transition-all duration-700"
          style={{ opacity: line3.done ? 1 : 0, transform: line3.done ? "translateY(0)" : "translateY(12px)" }}
        >
          {/* CTA principal */}
          <Link
            to="/projects"
            className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-lime-400 text-zinc-950 font-bold rounded hover:bg-lime-300 transition-colors duration-150"
          >
            Ver proyectos →
          </Link>

          {/* Links de redes */}
          <div className="flex items-center gap-3">
            <SocialLink href={ME.github} label="GitHub">
              {/* Ícono GitHub SVG */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </SocialLink>
            <SocialLink href={ME.linkedin} label="LinkedIn">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>
            <SocialLink href={`mailto:${ME.email}`} label="Email">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>

      {/* Flecha de scroll */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-zinc-600 text-xs tracking-widest flex flex-col items-center gap-2 transition-opacity duration-700"
        style={{ opacity: line3.done ? 1 : 0 }}
      >
        <span>scroll</span>
        <span className="animate-bounce">↓</span>
      </div>
    </section>
  );
}

// ─── ÍCONO DE RED SOCIAL ──────────────────────────────────────────────────────
function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded border border-zinc-700 text-zinc-400 hover:border-lime-400 hover:text-lime-400 transition-all duration-150"
    >
      {children}
    </a>
  );
}

// ─── DIVISOR DE SECCIÓN ───────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-lime-400 text-xs">&gt;</span>
      <span className="font-mono text-xs tracking-widest uppercase text-zinc-500">{children}</span>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>
  );
}

// ─── SECCIÓN SOBRE MÍ ─────────────────────────────────────────────────────────
function About() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      className="py-24 px-6 max-w-5xl mx-auto"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <SectionLabel>sobre mí</SectionLabel>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h2 className="font-mono font-black text-white text-3xl md:text-4xl tracking-tight mb-6 leading-tight">
            Dev en construcción,<br />
            <span className="text-lime-400">serio en el proceso.</span>
          </h2>
          <p className="font-mono text-zinc-400 text-sm leading-relaxed mb-6">
            {ME.description}
          </p>
          <Link
            to="/about"
            className="font-mono text-xs tracking-widest uppercase text-lime-400 border-b border-lime-400 border-opacity-40 hover:border-opacity-100 pb-0.5 transition-all"
          >
            Leer más →
          </Link>
        </div>

        {/* Skills */}
        <div>
          <p className="font-mono text-zinc-600 text-xs tracking-widest uppercase mb-4">stack actual</p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-3 py-1.5 rounded border border-zinc-700 text-zinc-400 hover:border-lime-400 hover:text-lime-400 transition-all duration-150 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SECCIÓN PROYECTOS ────────────────────────────────────────────────────────
function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      className="py-24 px-6 max-w-5xl mx-auto"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <SectionLabel>proyectos</SectionLabel>

      <div className="grid md:grid-cols-3 gap-4">
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            className="group border border-zinc-800 rounded p-5 hover:border-zinc-600 transition-all duration-200 flex flex-col"
            // Cada tarjeta aparece con un pequeño retraso escalonado
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Número del proyecto */}
            <span className="font-mono text-zinc-700 text-xs mb-3 group-hover:text-lime-400 transition-colors">
              {String(p.id).padStart(2, "0")}
            </span>

            <h3 className="font-mono font-bold text-white text-base mb-2">{p.title}</h3>
            <p className="font-mono text-zinc-500 text-xs leading-relaxed flex-1 mb-4">{p.desc}</p>

            {/* Tecnologías usadas */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 mt-auto">
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-zinc-400 hover:text-lime-400 transition-colors tracking-wide"
              >
                código ↗
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-400 hover:text-lime-400 transition-colors tracking-wide"
                >
                  demo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/projects"
          className="font-mono text-xs tracking-widest uppercase text-zinc-500 hover:text-lime-400 transition-colors"
        >
          ver todos los proyectos →
        </Link>
      </div>
    </section>
  );
}

// ─── SECCIÓN CONTACTO ─────────────────────────────────────────────────────────
function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [copied, setCopied] = useState(false);

  // Copia el correo al portapapeles al hacer clic
  const copyEmail = () => {
    navigator.clipboard.writeText(ME.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={ref}
      className="py-24 px-6 max-w-5xl mx-auto border-t border-zinc-800"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <SectionLabel>contacto</SectionLabel>

      <div className="max-w-lg">
        <h2 className="font-mono font-black text-white text-3xl md:text-4xl tracking-tight mb-4 leading-tight">
          ¿Hablamos?
        </h2>
        <p className="font-mono text-zinc-400 text-sm leading-relaxed mb-8">
          Estoy abierto a oportunidades, colaboraciones o simplemente charlar sobre código. 
          No dudes en escribirme.
        </p>

        {/* Correo copiable */}
        <button
          onClick={copyEmail}
          className="group flex items-center gap-3 font-mono text-sm text-zinc-300 hover:text-lime-400 transition-colors mb-8"
        >
          <span className="text-lime-400 opacity-60">&gt;</span>
          <span>{ME.email}</span>
          <span className="text-xs text-zinc-600 group-hover:text-lime-400 transition-colors ml-1">
            {copied ? "¡copiado! ✓" : "[ copiar ]"}
          </span>
        </button>

        {/* Redes */}
        <div className="flex gap-3">
          <a
            href={ME.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 border border-zinc-700 text-zinc-400 rounded hover:border-lime-400 hover:text-lime-400 transition-all duration-150"
          >
            GitHub
          </a>
          <a
            href={ME.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 border border-zinc-700 text-zinc-400 rounded hover:border-lime-400 hover:text-lime-400 transition-all duration-150"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
export default function Home() {
  return (
    // pt-20 compensa el navbar fijo que tiene h-[~80px]
    <main className="bg-zinc-950 min-h-screen pt-20">
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Footer mínimo */}
      <footer className="py-8 px-6 border-t border-zinc-800 text-center">
        <p className="font-mono text-zinc-700 text-xs">
          {/* Cambia el año si hace falta */}
          © {new Date().getFullYear()} {ME.name} — construido con React + Tailwind
        </p>
      </footer>
    </main>
  );
}