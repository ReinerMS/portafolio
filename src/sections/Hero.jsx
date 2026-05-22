// ─── sections/Hero.jsx ───────────────────────────────────────────────────────
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ME } from "../data/config";

// Anima un texto caracter por caracter
function useTypewriter(text, speed = 50, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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

export default function Hero() {
  const line1 = useTypewriter(`> Hola, soy`, 60, 300);
  const line2 = useTypewriter(ME.name, 70, 1200);
  const line3 = useTypewriter(ME.tagline, 40, 2400);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 mx-auto overflow-hidden">
      {/* Cuadrícula de fondo */}
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
        <p className="font-mono text-lime-400 text-sm md:text-base mb-2 h-6">
          {line1.displayed}
          {!line1.done && <span className="animate-pulse">▍</span>}
        </p>

        <h1 className="font-mono font-black text-white text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-4 h-24 md:h-32">
          {line2.displayed}
          {line1.done && !line2.done && <span className="animate-pulse text-lime-400">▍</span>}
        </h1>

        <p className="font-mono text-zinc-400 text-base md:text-xl max-w-xl mb-10 min-h-7">
          {line3.displayed}
          {line2.done && !line3.done && <span className="animate-pulse text-lime-400">▍</span>}
        </p>

        <div
          className="flex flex-wrap items-center gap-4 transition-all duration-700"
          style={{ opacity: line3.done ? 1 : 0, transform: line3.done ? "translateY(0)" : "translateY(12px)" }}
        >
          <Link
            to="/projects"
            className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-lime-400 text-zinc-950 font-bold rounded hover:bg-lime-300 transition-colors duration-150"
          >
            Ver proyectos →
          </Link>

          <div className="flex items-center gap-3">
            <SocialLink href={ME.github} label="GitHub">
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>

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