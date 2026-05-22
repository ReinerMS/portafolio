// ─── sections/ProjectsPreview.jsx ────────────────────────────────────────────
import { useRef } from "react";
import { Link } from "react-router";
import { PROJECTS } from "../data/config";
import { useInView, SectionLabel } from "./shared";

export default function ProjectsPreview() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      ref={ref}
      className="py-24 px-6 mx-auto"
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
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="font-mono text-zinc-700 text-xs mb-3 group-hover:text-lime-400 transition-colors">
              {String(p.id).padStart(2, "0")}
            </span>

            <h3 className="font-mono font-bold text-white text-base mb-2">{p.title}</h3>
            <p className="font-mono text-zinc-500 text-xs leading-relaxed flex-1 mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tech.map((t) => (
                <span key={t} className="font-mono text-xs text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-auto">
              {/* Enlace al detalle del proyecto dentro del portafolio */}
              <Link
                to={`/projects/${p.id}`}
                className="font-mono text-xs text-lime-400 hover:text-lime-300 transition-colors tracking-wide"
              >
                ver más →
              </Link>
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