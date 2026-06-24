// ─── pages/Projects.jsx ──────────────────────────────────────────────────────
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/config";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <main className="bg-zinc-950 min-h-screen pt-28 pb-24 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <p className="font-mono text-lime-400 text-xs tracking-widest uppercase mb-3">
          &gt; portafolio
        </p>

        <h1 className="font-mono font-black text-white text-4xl md:text-6xl tracking-tighter mb-4">
          Proyectos
        </h1>

        <p className="font-mono text-zinc-500 text-sm md:text-base max-w-2xl">
          Cosas que he construido mientras aprendo.
        </p>

        <p className="font-mono text-zinc-500 text-sm md:text-base max-w-2xl mt-2">
          Cada proyecto representa un problema real que quise resolver o una
          tecnología que decidí dominar.
        </p>
      </div>

      {/* Separador */}
      <div className="max-w-7xl mx-auto flex items-center gap-4 mb-12">
        <div className="flex-1 h-px bg-zinc-800" />
        <span className="font-mono text-zinc-700 text-xs tracking-widest uppercase">
          {PROJECTS.length} proyectos
        </span>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => {
          const technologies = project.technologies || [];

          const image = project.heroImage || "/projects/default.png";

          const description =
            project.shortDescription ||
            project.description ||
            "";

          const repo = project.links?.repository || null;
          const demo = project.links?.liveDemo || null;

          return (
            <article
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-xl
                border
                border-zinc-800
                bg-zinc-900/30
                hover:bg-zinc-900/60
                hover:border-lime-400
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden border-b border-zinc-800">
                <img
                  src={image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                <div className="absolute top-4 left-4">
                  <span className="font-mono text-xs text-white bg-black/70 px-3 py-1 rounded">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`
                    font-mono text-xs px-2 py-1 rounded border
                    ${project.status === "completed" && "text-lime-400 border-lime-400 bg-lime-400/10"}
                    ${project.status === "development" && "text-yellow-400 border-yellow-400 bg-yellow-400/10"}
                    ${project.status === "archived" && "text-red-400 border-red-400 bg-red-400/10"}
                  `}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-82.5">
                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="
                        font-mono
                        text-xs
                        px-2
                        py-1
                        rounded
                        bg-zinc-800
                        text-zinc-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="font-mono font-bold text-white text-xl mb-3 group-hover:text-lime-400 transition-colors">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="font-mono text-sm text-zinc-500 leading-relaxed flex-1">
                  {description}
                </p>

                {/* Footer */}
                <div className="mt-6">
                  <div className="h-px bg-zinc-800 mb-4" />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest uppercase text-lime-400">
                      Explorar proyecto
                    </span>

                    <span className="text-lime-400 text-xl group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-4">
                    {repo && (
                      <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-mono text-xs text-zinc-500 hover:text-lime-400 transition-colors"
                      >
                        código ↗
                      </a>
                    )}

                    {demo && (
                      <a
                        href={demo}
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
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}