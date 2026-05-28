import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import { PROJECTS } from "../data/config";

export default function ProjectDetail() {
  // useParams lee el :id de la URL — si estás en /projects/2, id = "2"
  const { id } = useParams();
  // Busca el proyecto cuyo id coincida. Como la URL es string, usamos Number(id)
  const project = PROJECTS.find((p) => p.id === Number(id));

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!project) return;

    async function getCharacters() {
      try {
        const response = await fetch(project.apiUrl);
        const data = await response.json();

        setCharacters(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getCharacters();
  }, [project]);

  if (!project) return <Navigate to="*" replace />;

  return (
    <main className="bg-zinc-950 min-h-screen pt-28 pb-24 px-6 mx-auto">

      {/* Botón volver */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-lime-400 transition-colors mb-12 tracking-widest uppercase"
      >
        ← volver a proyectos
      </Link>

      {/* Número */}
      <p className="font-mono text-zinc-700 text-xs mb-3">
        {String(project.id).padStart(2, "0")}
      </p>

      {/* Título */}
      <h1 className="font-mono font-black text-white text-4xl md:text-5xl tracking-tighter mb-6">
        {project.title}
      </h1>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-3 py-1.5 rounded border border-zinc-700 text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Línea divisora */}
      <div className="h-px bg-zinc-800 mb-10" />

      {/* Descripción larga (body) */}
      <p className="font-mono text-zinc-400 text-sm leading-relaxed mb-12">
        {/* Si no hay body, usa desc como fallback */}
        {project.body || project.desc}
      </p>

      <div className="text-white">
        {loading && (
          <p className="font-mono text-zinc-500">
            Cargando personajes...
          </p>
        )}

        {error && (
          <p className="font-mono text-red-400">
            {error}
          </p>
        )}

        {!loading && !error && (
          <section className="mt-16">
            <h2 className="font-mono text-white text-2xl font-bold mb-8">
              Personajes de Rick and Morty
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {characters.map((character) => (
                <article
                  key={character.id}
                  className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-lime-400 transition-all"
                >
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="p-5">
                    <h3 className="font-mono text-white font-bold text-lg mb-2">
                      {character.name}
                    </h3>

                    <p className="font-mono text-zinc-400 text-sm">
                      Especie: {character.species}
                    </p>

                    <p className="font-mono text-zinc-400 text-sm">
                      Género: {character.gender}
                    </p>

                    <p
                      className={`font-mono text-sm mt-3 ${character.status === "Alive"
                          ? "text-lime-400"
                          : character.status === "Dead"
                            ? "text-red-400"
                            : "text-yellow-400"
                        }`}
                    >
                      Estado: {character.status}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-lime-400 text-zinc-950 font-bold rounded hover:bg-lime-300 transition-colors"
        >
          ver código ↗
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-zinc-700 text-zinc-400 rounded hover:border-lime-400 hover:text-lime-400 transition-all"
          >
            ver demo ↗
          </a>
        )}
      </div>
    </main>
  );
}