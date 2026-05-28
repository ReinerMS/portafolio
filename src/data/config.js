

// Cada proyecto tiene un `id` único — se usa para la URL de detalle: /projects/1
export const PROJECTS = [
  {
    id: 1,
    title: "API 'Rick and Morty'",
    desc: "Una app web para gestionar tareas con autenticación de usuarios y base de datos en tiempo real.",
    // `body` es la descripción larga que aparece en la página de detalle
    body: "Este proyecto nació para aprender Firebase Auth y Firestore. Implementé registro, login, y CRUD de tareas en tiempo real. El mayor desafío fue manejar el estado de autenticación globalmente con Context API.",
    tech: ["React", "Firebase", "Tailwind"],
    repo: "https://github.com/ReinerMS/proyecto-alfa",
    live: "#",
    // imagen de preview (ponla en /public/projects/alfa.png)
    image: "/projects/alfa.png",
  }
];