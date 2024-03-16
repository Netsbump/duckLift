import { createBrowserRouter } from "react-router-dom";
import { Login } from "@pages/Login/Login";
import { Home } from "@pages/Home/Home";
import { RouteGuard } from "src/app/routes/RouteGuard";
import { Athletes } from "@pages/Home/SubPages/Athletes";
import { Exercices } from "@pages/Home/SubPages/Exercices";
import { Planning } from "@pages/Home/SubPages/Planning";
import { Club } from "@pages/Home/SubPages/Club";

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
        path: "athletes",
        element: <Athletes />,
      },
      {
        path: "exercises",
        element: <Exercices />,
      },
      {
        path: "planning",
        element: <Planning />,
      },
      {
        path: "club",
        element: <Club />,
      },
    ],
  },
]);
