import { useNavigate } from "react-router-dom";
import { useAuth } from "@features/auth/hooks/useAuth";
import { useEffect } from "react";

interface RouteGuardProps {
  children?: React.ReactNode;
  requireAuth?: boolean;
}

export const RouteGuard: React.FC<RouteGuardProps> = ({
  children,
  requireAuth = false,
}) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (requireAuth && !isAuthenticated) {
      navigate("/login");
    } else if (!requireAuth && isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, requireAuth, navigate]);

  return <>{children}</>;
};
