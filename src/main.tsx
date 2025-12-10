import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFoundPage from "./assets/pages/error/NotFoundPage.tsx";
import HomePage from "./assets/pages/HomePage.tsx";
import ArtilcesPage from "./assets/pages/ArticlesPage.tsx";
import ProjectsPage from "./assets/pages/ProjectsPage.tsx";
import DetailProject from "./assets/pages/DetailProject.tsx";
import DetailArticle from "./assets/pages/DetailArticle.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/project/:slug",
    element: <DetailProject />,
  },
  {
    path: "/articles",
    element: <ArtilcesPage />,
  },
  {
    path: "/article/:slug",
    element: <DetailArticle />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
