import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login/Index";
import { Home } from "../pages/Home/Index";
import { RouteGuard } from "./RouteGuard";
import { Athletes } from "../pages/Home/SubPages/Athletes";
import { Exercices } from "../pages/Home/SubPages/Exercices";
import { Planning } from "../pages/Home/SubPages/Planning";
import { Club } from "../pages/Home/SubPages/Club";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RouteGuard>
        <Login />
      </RouteGuard>
    ),
  },
  {
    path: "/",
    element: (
      <RouteGuard requireAuth={true}>
        <Home />
      </RouteGuard>
    ),
    children: [
      {
        path: "page-athletes",
        element: <Athletes />,
      },
      {
        path: "page-exercises",
        element: <Exercices />,
      },
      {
        path: "page-planning",
        element: <Planning />,
      },
      {
        path: "page-club",
        element: <Club />,
      },
    ],
  },
]);
