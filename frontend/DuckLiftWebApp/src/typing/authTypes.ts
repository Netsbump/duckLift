export interface User {
  id: number;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userInfo: User) => void;
  logout: () => void;
}
