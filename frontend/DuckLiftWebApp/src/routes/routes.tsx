import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { RouteGuard } from "./RouteGuard";
import { Athletes } from "../pages/Athletes";
import { Exercices } from "../pages/Exercices";
import { Planning } from "../pages/Planning";
import { Club } from "../pages/Club";

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
