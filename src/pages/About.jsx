// ─── pages/About.jsx ─────────────────────────────────────────────────────────
import { Link } from "react-router";
import { ME } from "../data/Me";

const SKILLS = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML / CSS",
  "Git",
  "Node.js",
  "Python",
  "SQL",
  "REST APIs",]

export default function About() {
  return (
    <main className="bg-zinc-950 min-h-screen pt-28 pb-24 px-6 mx-auto">

      {/* Header */}
      <p className="font-mono text-lime-400 text-xs tracking-widest uppercase mb-3">
        &gt; sobre mí
      </p>
      <h1 className="font-mono font-black text-white text-4xl md:text-5xl tracking-tighter mb-12">
        {ME.name}
      </h1>

      <div className="h-px bg-zinc-800 mb-12" />

      {/* Bio */}
      <div className="mb-14">
        <p className="font-mono text-zinc-400 text-sm leading-relaxed mb-4">
          {ME.description}
        </p>
        <p className="font-mono text-zinc-500 text-sm leading-relaxed">
          Cuando no estoy escribiendo código, estoy aprendiendo sobre arquitectura de software,
          leyendo sobre buenas prácticas o explorando nuevas herramientas. Creo que la consistencia
          importa más que el talento, y que cada proyecto — por pequeño que sea — enseña algo nuevo.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-14">
        <p className="font-mono text-zinc-600 text-xs tracking-widest uppercase mb-6">
          <span className="text-lime-400 mr-2">&gt;</span>stack actual
        </p>
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

      {/* CTA */}
      <div className="flex gap-4 flex-wrap">
        <Link
          to="/projects"
          className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-lime-400 text-zinc-950 font-bold rounded hover:bg-lime-300 transition-colors"
        >
          ver proyectos →
        </Link>
        <a
          href={ME.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-zinc-700 text-zinc-400 rounded hover:border-lime-400 hover:text-lime-400 transition-all"
        >
          GitHub ↗
        </a>
      </div>
    </main>
  );
}