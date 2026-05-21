import { useState, useEffect } from "react";

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);

  // Rastrea el movimiento del mouse para el efecto parallax en los números
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Activa el efecto glitch cada ciertos segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-950 flex flex-col items-center justify-center overflow-hidden font-mono">

      {/* Cuadrícula de fondo decorativa */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#a3e635 1px, transparent 1px), linear-gradient(90deg, #a3e635 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Círculo de luz de fondo */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-lime-500 opacity-5 blur-3xl" />

      {/* Número 404 grande con efecto parallax */}
      <div
        className="relative select-none"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <span
          className={`text-[18vw] font-black leading-none tracking-tighter text-transparent bg-clip-text
            ${glitchActive ? "animate-pulse" : ""}
          `}
          style={{
            backgroundImage: "linear-gradient(135deg, #a3e635 0%, #4ade80 50%, #a3e635 100%)",
            // Efecto de sombra de texto para el glitch
            textShadow: glitchActive
              ? "3px 0 #f43f5e, -3px 0 #60a5fa"
              : "none",
          }}
        >
          404
        </span>
      </div>

      {/* Línea divisora */}
      <div className="flex items-center gap-4 mb-8 w-full max-w-sm">
        <div className="flex-1 h-px bg-lime-500 opacity-30" />
        <span className="text-lime-500 text-xs tracking-widest uppercase opacity-60">error</span>
        <div className="flex-1 h-px bg-lime-500 opacity-30" />
      </div>

      {/* Mensaje principal */}
      <div className="relative z-10 text-center px-6 max-w-md">
        <p className="text-zinc-400 text-sm tracking-widest uppercase mb-3">
          <span className="text-lime-400">&gt;</span> Página no encontrada
        </p>
        <p className="text-zinc-500 text-sm leading-relaxed mb-10">
          Esta ruta no existe en el sistema. Puede que hayas seguido un enlace roto
          o escrito mal la URL.
        </p>

        {/* Botón para volver al inicio */}
        <a
          href="/"
          className="group inline-flex items-center gap-3 border border-lime-500 border-opacity-40
            text-lime-400 text-sm tracking-wider px-8 py-3 rounded
            hover:bg-lime-500 hover:text-zinc-950 hover:border-opacity-100
            transition-all duration-200"
        >
          {/* Flecha animada */}
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          Volver al inicio
        </a>
      </div>

      {/* Texto decorativo de esquina — estilo terminal */}
      <div className="absolute bottom-6 left-6 text-zinc-700 text-xs space-y-1 font-mono">
        <p>status: <span className="text-red-400">404</span></p>
        <p>path: <span className="text-zinc-500">{window.location.pathname}</span></p>
      </div>

      {/* Puntos decorativos de esquina */}
      <div className="absolute top-6 right-6 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500 opacity-70" />
        <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-70" />
        <div className="w-2 h-2 rounded-full bg-lime-500 opacity-70" />
      </div>
    </div>
  );
}