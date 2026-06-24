// ─── pages/ProjectDetail.jsx ────────────────────────────────────────────────
import { Link, Navigate, useParams } from "react-router";
import { PROJECTS } from "../data/config";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = PROJECTS.find(
    (p) => p.id === Number(id)
  );

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const statusColors = {
    completed:
      "border-lime-400 text-lime-400 bg-lime-400/10",
    development:
      "border-yellow-400 text-yellow-400 bg-yellow-400/10",
    archived:
      "border-red-400 text-red-400 bg-red-400/10",
  };

  const renderExtra = () => {
  switch (project.type) {
    case "api":
      return <ApiSection project={project} />;

    case "webapp":
      return <WebAppSection project={project} />;

    default:
      return null;
  }
};

  return (
    <main className="bg-zinc-950 min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Navegación */}
        <Link
          to="/projects"
          className="
            inline-flex
            items-center
            gap-2
            mb-10
            font-mono
            text-xs
            uppercase
            tracking-widest
            text-zinc-500
            hover:text-lime-400
            transition-colors
          "
        >
          ← volver a proyectos
        </Link>

        {/* Hero */}
        <section className="mb-12">
          <div className="overflow-hidden rounded-2xl border border-zinc-800">
            <img
              src={project.heroImage}
              alt={project.title}
              className="
                w-full
                h-62.5
                md:h-125
                object-cover
              "
            />
          </div>
        </section>

        {/* Header */}
        <section className="mb-14">
          <div className="flex flex-wrap items-center gap-4 mb-4">

            <span className="font-mono text-xs text-zinc-600">
              #{String(project.id).padStart(2, "0")}
            </span>

            <span
              className={`
                px-3
                py-1
                rounded-full
                text-xs
                font-mono
                border
                ${statusColors[project.status] ||
                "border-zinc-700 text-zinc-400"}
              `}
            >
              {project.status}
            </span>

            <span className="font-mono text-xs text-zinc-500 uppercase">
              {project.type}
            </span>
          </div>

          <h1
            className="
              text-white
              text-4xl
              md:text-6xl
              font-black
              tracking-tight
              mb-6
            "
          >
            {project.title}
          </h1>

          <p
            className="
              text-zinc-400
              text-lg
              leading-relaxed
              max-w-4xl
            "
          >
            {project.description}
          </p>
        </section>

        {/* Tecnologías */}
        <section className="mb-14">
          <h2 className="text-white text-2xl font-bold mb-6">
            Tecnologías
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  border-zinc-700
                  text-zinc-300
                  font-mono
                  text-sm
                  bg-zinc-900
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        {project.features?.length > 0 && (
          <section className="mb-14">
            <h2 className="text-white text-2xl font-bold mb-6">
              Características
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="
                    border
                    border-zinc-800
                    bg-zinc-900/40
                    rounded-xl
                    p-5
                  "
                >
                  <span className="text-lime-400 mr-2">✓</span>

                  <span className="text-zinc-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Secciones dinámicas */}
        {project.sections?.length > 0 && (
          <section className="mb-14">
            <h2 className="text-white text-2xl font-bold mb-8">
              Documentación
            </h2>

            <div className="space-y-8">
              {project.sections.map((section, index) => (
                <div
                  key={index}
                  className="
                    border-l-2
                    border-lime-400
                    pl-6
                  "
                >
                  <h3
                    className="
                      text-white
                      text-xl
                      font-semibold
                      mb-3
                    "
                  >
                    {section.title}
                  </h3>

                  <p
                    className="
                      text-zinc-400
                      leading-relaxed
                    "
                  >
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* APIs */}
        {project.api && (
          <section className="mb-14">
            <h2 className="text-white text-2xl font-bold mb-6">
              APIs Integradas
            </h2>

            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(project.api).map(([key, value]) => (
                <div
                  key={key}
                  className="
                    border
                    border-zinc-800
                    rounded-xl
                    p-5
                    bg-zinc-900/40
                  "
                >
                  <h3 className="text-lime-400 font-mono text-sm mb-2 uppercase">
                    {key}
                  </h3>

                  <p
                    className="
                      text-zinc-500
                      text-xs
                      break-all
                    "
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Galería */}
        {project.gallery?.length > 0 && (
          <section className="mb-14">
            <h2 className="text-white text-2xl font-bold mb-6">
              Capturas del proyecto
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-zinc-800
                  "
                >
                  <img
                    src={image}
                    alt={`${project.title}-${index}`}
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-105
                      transition-transform
                      duration-500
                    "
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links */}
        {(project.links?.repository ||
          project.links?.liveDemo) && (
          <section className="mt-16">
            <div className="flex flex-wrap gap-4">

              {project.links?.repository && (
                <a
                  href={project.links.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-6
                    py-3
                    rounded-lg
                    bg-lime-400
                    text-zinc-950
                    font-bold
                    hover:bg-lime-300
                    transition-colors
                  "
                >
                  Ver código ↗
                </a>
              )}

              {project.links?.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-6
                    py-3
                    rounded-lg
                    border
                    border-zinc-700
                    text-zinc-300
                    hover:border-lime-400
                    hover:text-lime-400
                    transition-all
                  "
                >
                  Ver demo ↗
                </a>
              )}
            </div>
          </section>
        )}
        
      </div>
    </main>
  );
}