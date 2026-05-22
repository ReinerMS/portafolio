// ─── sections/Contact.jsx ────────────────────────────────────────────────────
import { useRef, useState } from "react";
import { ME } from "../data/config";
import { useInView, SectionLabel } from "./shared";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(ME.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={ref}
      className="py-24 px-6 mx-auto border-t border-zinc-800"
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