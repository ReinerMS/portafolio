import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";
import Home from "../Page/Home";
import Dashboard from "../Page/Dashboard";
import NotFound from "../Page/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    }
])