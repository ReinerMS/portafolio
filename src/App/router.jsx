import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import ProjectDetail from "../Pages/ProjectDetail";
import NotFound from "../Pages/NotFound";

const basename = import.meta.env.PROD ? "/portafolio" : "/";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "projects/:id",
          element: <ProjectDetail />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    basename,
  }
);