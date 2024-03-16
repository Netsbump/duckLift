import React, {
  createContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import { UserType, AuthContextType } from "src/features/auth/types/authTypes";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => !!localStorage.getItem("token"),
  );

  const login = useCallback((userInfo: UserType) => {
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

export { AuthContext };
