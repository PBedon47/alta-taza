import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/user";

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {

  const [user, setUser] = useState<User | null>(() => {
    return JSON.parse(localStorage.getItem("user") || "null");
  });

  const login = (userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("usuarioNombre", userData.nombre);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("usuarioNombre");
    localStorage.removeItem("welcomeClosed");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
}