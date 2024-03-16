export interface UserType {
  id: number;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: UserType | null;
  isAuthenticated: boolean;
  login: (userInfo: UserType) => void;
  logout: () => void;
}
