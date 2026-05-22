import { useState } from "react";
import { NavLink } from "react-router";

// Los links de navegación en un solo lugar — fácil de agregar o quitar
const links = [
  { to: "/", label: "inicio" },
  { to: "/about", label: "sobre mí" },
  { to: "/projects", label: "proyectos" },
];

export default function Navbar() {
  // Controla si el menú móvil está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 bg-opacity-80 backdrop-blur border-b border-zinc-800 font-mono">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo — estilo prompt de terminal */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="text-lime-400 text-lg">▸</span>
          <span className="text-white font-black tracking-tight text-sm uppercase">
            {/* Cambia "tu-nombre" por tu nombre real */}
            Portafolio
          </span>
          {/* Cursor parpadeante */}
          <span className="w-2 h-4 bg-lime-400 opacity-80 animate-pulse" />
        </NavLink>

        {/* Links — escritorio */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              // NavLink llama a esta función con { isActive: true/false }
              // según si la ruta actual coincide con `to`
              className={({ isActive }) =>
                `px-4 py-1.5 text-xs tracking-widest uppercase transition-all duration-150 rounded
                ${
                  isActive
                    ? "text-zinc-950 bg-lime-400 font-bold"
                    : "text-zinc-400 hover:text-lime-400 hover:bg-zinc-800"
                }`
              }
            >
              {/* Prefijo > solo en el link activo */}
              {({ isActive }) => (
                <span>
                  {isActive && <span className="mr-1 opacity-60">&gt;</span>}
                  {label}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Botón hamburguesa — solo visible en móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-zinc-400 hover:text-lime-400 transition-colors"
          aria-label="Abrir menú"
        >
          {/* Las 3 líneas se transforman en X cuando el menú está abierto */}
          <span className={`block w-5 h-px bg-current transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`md:hidden border-t border-zinc-800 overflow-hidden transition-all duration-200 ${menuOpen ? "max-h-64" : "max-h-0"}`}>
        <div className="px-6 py-3 flex flex-col gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)} // Cierra el menú al navegar
              className={({ isActive }) =>
                `px-3 py-2 text-xs tracking-widest uppercase transition-all duration-150 rounded
                ${
                  isActive
                    ? "text-zinc-950 bg-lime-400 font-bold"
                    : "text-zinc-400 hover:text-lime-400 hover:bg-zinc-800"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}