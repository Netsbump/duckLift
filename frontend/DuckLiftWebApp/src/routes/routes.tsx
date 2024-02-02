import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { RouteGuard } from "./RouteGuard";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <RouteGuard requireAuth={true}>
        <Login />
      </RouteGuard>
    ),
  },
  {
    path: "/",
    element: <Home />,
  },
]);
