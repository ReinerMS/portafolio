export const PROJECTS = [
  {
    id: 1,
    slug: "rick-and-morty",
    type: "api",

    title: "API Rick and Morty",

    shortDescription:
      "Aplicación web conectada a la API de Rick and Morty.",

    description: `
      Proyecto desarrollado para practicar consumo de APIs REST,
      manejo de estados, paginación, búsqueda y renderizado dinámico
      de información.
    `,

    technologies: [
      "React",
      "Tailwind",
      "API REST"
    ],

    status: "completed",

    links: {
      repository: null,
      liveDemo: null
    },

    heroImage: "/projects/rickmorty/hero.png",

    gallery: [
      "/projects/rickmorty/home.png",
      "/projects/rickmorty/characters.png",
      "/projects/rickmorty/detail.png"
    ],

    features: [
      "Listado de personajes",
      "Consumo de API REST",
      "Paginación",
      "Carga dinámica",
      "Diseño responsive"
    ],

    api: {
      characters: "https://rickandmortyapi.com/api/character",
      locations: "https://rickandmortyapi.com/api/location",
      episodes: "https://rickandmortyapi.com/api/episode"
    },

    sections: [
      {
        type: "text",
        title: "Objetivo",
        content:
          "Aprender integración con APIs REST utilizando React."
      },
      {
        type: "text",
        title: "Desafíos",
        content:
          "Manejo de grandes cantidades de registros y paginación."
      }
    ]
  },

  {
    id: 2,
    slug: "globalbet",

    type: "webapp",

    title: "GlobalBet",

    shortDescription:
      "Plataforma web para apuestas deportivas.",

    description: `
      Sistema completo para gestión de apuestas deportivas,
      cuotas, usuarios, transacciones y administración.
    `,

    technologies: [
      "React",
      "Tailwind",
      "Supabase",
      "Node.js",
      "APIs"
    ],

    status: "development",

    links: {
      repository: null,
      liveDemo: null
    },

    heroImage: "/projects/globalbet/hero.png",

    gallery: [
      "/projects/globalbet/home.png",
      "/projects/globalbet/matches.png",
      "/projects/globalbet/dashboard.png"
    ],

    features: [
      "Autenticación",
      "Cuotas deportivas",
      "Dashboard",
      "Panel administrativo",
      "Historial de apuestas"
    ],

    api: null,

    sections: [
      {
        type: "text",
        title: "Objetivo",
        content:
          "Crear una plataforma moderna para apuestas deportivas."
      }
    ]
  }
];