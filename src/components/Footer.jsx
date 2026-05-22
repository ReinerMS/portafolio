import { Link } from "react-router";

// ─── DATOS — edita con tu información real ────────────────────────────────────
const ME = {
  name: "Reiner Mora",
  phone: "+506 86868861",
  role: "Junior Developer",
  email: "reiner.ms.cr@hotmail.com",
  github: "https://github.com/ReinerMS",
  linkedin: "https://www.linkedin.com/in/reiner-mora-656273209/",
};

const NAV_LINKS = [
  { to: "/", label: "inicio" },
  { to: "/about", label: "sobre mí" },
  { to: "/projects", label: "proyectos" },
  { to: "/dashboard", label: "dashboard" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: ME.github,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: ME.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${ME.email}`,
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 font-mono">

      {/* Cuerpo principal del footer */}
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Columna 1 — Marca */}
        <div className="flex flex-col gap-4">
          {/* Logo igual al Navbar */}
          <Link to="/" className="flex items-center gap-2 w-fit group">
            <span className="text-lime-400 text-lg">▸</span>
            <span className="text-white font-black tracking-tight text-sm uppercase">
              {ME.name}
            </span>
            <span className="w-2 h-4 bg-lime-400 opacity-80 animate-pulse" />
          </Link>

          <p className="text-zinc-600 text-xs leading-relaxed max-w-50">
            {ME.role} — construyendo interfaces mientras sigo aprendiendo.
          </p>

          {/* Íconos de redes sociales */}
          <div className="flex gap-2 mt-1">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded border border-zinc-800 text-zinc-500 hover:border-lime-400 hover:text-lime-400 transition-all duration-150"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Columna 2 — Navegación */}
        <div>
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-4">
            <span className="text-lime-400 mr-1">&gt;</span> navegación
          </p>
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-zinc-500 text-xs tracking-wide hover:text-lime-400 transition-colors duration-150"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 — Contacto rápido */}
        <div>
            
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-4">
            <span className="text-lime-400 mr-1">&gt;</span> contacto
          </p>
          <a
            href={`phone:${ME.phone}`}
            className="text-zinc-500 text-xs hover:text-lime-400 transition-colors duration-150 block mb-2"
          >
            {ME.phone}
          </a>
          <a
            href={`mailto:${ME.email}`}
            className="text-zinc-500 text-xs hover:text-lime-400 transition-colors duration-150 block mb-2"
          >
            {ME.email}
          </a>
          <a
            href={ME.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 text-xs hover:text-lime-400 transition-colors duration-150 block"
          >
            {ME.github.replace("https://", "")}
          </a>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-zinc-700 text-xs">
            © {year} {ME.name}. Todos los derechos reservados.
          </p>
          <p className="text-zinc-700 text-xs">
            hecho con{" "}
            <span className="text-lime-400 opacity-60">React</span>
            {" + "}
            <span className="text-lime-400 opacity-60">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}