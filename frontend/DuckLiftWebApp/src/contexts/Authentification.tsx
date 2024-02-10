import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import { User, AuthContextType } from "../types/authTypes";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem("token"),
  );

  const login = useCallback((userInfo: User) => {
    const fakeToken = `fakeToken-${userInfo.email}-${userInfo.name}`;
    localStorage.setItem("token", fakeToken);

    setIsAuthenticated(true);
    setUser(userInfo);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      isAuthenticated,
      login,
      logout,
    }),
    [user, isAuthenticated, login, logout],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
