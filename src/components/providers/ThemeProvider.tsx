// src/providers/ThemeProvider.tsx

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define o tipo para o valor do contexto
type ThemeContextType = {
  isForced: boolean;
  setIsForced: (theme: boolean) => void;
};

// Cria o contexto com um valor padrão
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define as props do ThemeProvider
type ThemeProviderProps = {
  children: ReactNode;
  forcedDark?: boolean; // Tema forçado (opcional)
};

export function ThemeProvider({ children, forcedDark }: ThemeProviderProps) {
  const [isForced, setIsForced] = useState<boolean>(false); // Define como falso por padrão

  // Força o tema se `forcedTheme` for passado
  useEffect(() => {
    if (forcedDark) {
      setIsForced(true);
    } else {
      setIsForced(false);
    }
  }, [forcedDark]);

  // Aplica a classe ao elemento HTML
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    if (isForced) document.documentElement.classList.add("dark");
  }, [isForced]);

  return (
    <ThemeContext.Provider value={{ isForced, setIsForced }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para usar o contexto do tema
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
