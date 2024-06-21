import type {RouteObject} from "react-router-dom";
import {Navigate} from "react-router-dom";
import AboutUs from "../pages/AboutUs.tsx";
import HomePage from "../pages/HomePage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";
import Dashboard from "../pages/Dashboard.tsx";

const MainRoutes: RouteObject[] = [
  {
    element: <Navigate to="/home" replace />,
    path: "/",
  },
  {
    element: <HomePage />,
    path: "/home",
  },
  {
    element: <AboutUs />,
    path: "/aboutUs",
  },
  {
    element: <Dashboard />,
    path: "/dashboard",
  },
  {
    element: <NotFoundPage />,
    path: "*",
  },
];

export default MainRoutes;
