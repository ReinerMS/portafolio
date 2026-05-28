// ─── pages/Projects.jsx ──────────────────────────────────────────────────────
import { Link } from "react-router";
import { PROJECTS } from "../data/config";

export default function Projects() {
  return (
    <main className="bg-zinc-950 min-h-screen pt-28 pb-24 px-6 mx-auto">

      {/* Header de la página */}
      <div className="mb-16">
        <p className="font-mono text-lime-400 text-xs tracking-widest uppercase mb-3">
          &gt; portafolio
        </p>
        <h1 className="font-mono font-black text-white text-4xl md:text-5xl tracking-tighter mb-4">
          Proyectos
        </h1>
        <p className="font-mono text-zinc-500 text-sm max-w-lg">
          Cosas que he construido mientras aprendo.
        </p>
        <p className="font-mono text-zinc-500 text-sm max-w-lg"
        >Cada proyecto representa un problema real
          que quise resolver o una tecnología que quise dominar.</p>

      </div>

      {/* Línea divisora */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex-1 h-px bg-zinc-800" />
        <span className="font-mono text-zinc-700 text-xs">{PROJECTS.length} proyectos</span>
      </div>

      {/* Grid de proyectos */}
      <div className="grid md:grid-cols-2 gap-4">
        {PROJECTS.map((p, i) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="group border border-zinc-800 rounded p-6 hover:border-zinc-600 transition-all duration-200 flex flex-col"
          >
            {/* Número + tech */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-zinc-700 text-xs group-hover:text-lime-400 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex gap-1.5">
                {p.tech.slice(0, 2).map((t) => (
                  <span key={t} className="font-mono text-xs text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
                {p.tech.length > 2 && (
                  <span className="font-mono text-xs text-zinc-700 px-1">
                    +{p.tech.length - 2}
                  </span>
                )}
              </div>
            </div>

            <h2 className="font-mono font-bold text-white text-lg mb-2 group-hover:text-lime-400 transition-colors">
              {p.title}
            </h2>
            <p className="font-mono text-zinc-500 text-xs leading-relaxed flex-1 mb-6">
              {p.desc}
            </p>

            {/* Footer de la tarjeta */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity">
                ver detalle →
              </span>
              <div className="flex gap-3">
                {/* Evita que el click en estos links navegue también a ProjectDetail */}
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-mono text-xs text-zinc-500 hover:text-lime-400 transition-colors"
                >
                  código ↗
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-mono text-xs text-zinc-500 hover:text-lime-400 transition-colors"
                  >
                    demo ↗
                  </a>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}