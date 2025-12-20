import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  user: { name: string; email: string } | null;
}

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("isAuth");
    return storedAuth === "true";
  });

  const [user, setUser] = useState<{ name: string; email: string } | null>(
    () => {
      const storedAuth = localStorage.getItem("isAuth");
      if (storedAuth === "true") {
        return { name: "Gabriel Davi", email: "gabriel@mail.com" };
      }
      return null;
    }
  );

  const login = (email: string, password: string) => {
    if (email && password) {
      localStorage.setItem("isAuth", "true");
      setIsAuthenticated(true);
      setUser({ name: "Gabriel Davi", email: email });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("isAuth");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
