// ─── data/config.js ──────────────────────────────────────────────────────────
// Todos los datos del portafolio en un solo lugar.
// Para editar cualquier texto, solo toca este archivo.

export const ME = {
  name: "Reiner Mora",
  role: "Junior Developer",
  tagline: "Construyendo cosas reales mientras aprendo.",
  description:
    "Soy un desarrollador en formación apasionado por crear interfaces limpias y funcionales. Actualmente aprendiendo React, Tailwind y Node.js. Busco mi primera oportunidad profesional donde pueda seguir creciendo.",
  github: "https://github.com/ReinerMS",
  linkedin: "https://www.linkedin.com/in/reiner-mora-656273209/",
  email: "reiner.ms.cr@hotmail.com", // ← cambia esto por tu correo real
};

export const SKILLS = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML / CSS",
  "Git",
  "Node.js",
  "Python",
  "SQL",
  "REST APIs",
];

// Cada proyecto tiene un `id` único — se usa para la URL de detalle: /projects/1
export const PROJECTS = [
  {
    id: 1,
    title: "Proyecto Alfa",
    desc: "Una app web para gestionar tareas con autenticación de usuarios y base de datos en tiempo real.",
    // `body` es la descripción larga que aparece en la página de detalle
    body: "Este proyecto nació para aprender Firebase Auth y Firestore. Implementé registro, login, y CRUD de tareas en tiempo real. El mayor desafío fue manejar el estado de autenticación globalmente con Context API.",
    tech: ["React", "Firebase", "Tailwind"],
    repo: "https://github.com/ReinerMS/proyecto-alfa",
    live: "#",
    // imagen de preview (ponla en /public/projects/alfa.png)
    image: "/projects/alfa.png",
  },
  {
    id: 2,
    title: "Proyecto Beta",
    desc: "API REST construida con Node.js y Express para manejar un catálogo de productos con CRUD completo.",
    body: "API desplegada en Railway con endpoints para crear, leer, actualizar y eliminar productos. Incluye validación con express-validator y conexión a MongoDB Atlas.",
    tech: ["Node.js", "Express", "MongoDB"],
    repo: "https://github.com/ReinerMS/proyecto-beta",
    live: null,
    image: "/projects/beta.png",
  },
  {
    id: 3,
    title: "Proyecto Gamma",
    desc: "Portafolio personal construido desde cero con React y Tailwind, enfocado en rendimiento y diseño.",
    body: "Mi portafolio personal — el proyecto que estás viendo ahora mismo. Diseño propio, sin templates. Implementé animaciones con CSS puro y Tailwind, enrutamiento con React Router y despliegue en Vercel.",
    tech: ["React", "Tailwind", "Vite"],
    repo: "https://github.com/ReinerMS/portfolio",
    live: "#",
    image: "/projects/gamma.png",
  },
];