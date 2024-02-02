import { useNavigate } from "react-router-dom";

interface RouteGuardProps {
  children?: React.ReactNode;
  requireAuth: boolean;
}

export const RouteGuard: React.FC<RouteGuardProps> = ({
  children,
  requireAuth = true,
}) => {
  const navigate = useNavigate();
  if (requireAuth) {
    navigate("/login");
  } else if (!requireAuth) {
    navigate("/");
  }
  return <>{children}</>;
};
