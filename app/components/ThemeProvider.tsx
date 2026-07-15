"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Read initial theme from DOM (set by blocking init script) — avoids hydration flash
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  // Read from documentElement (already set by blocking init script in <head>)
  // — avoids the flash that comes from a useEffect-based localStorage read (issue #5)
  // No longer needed — initial state reads from DOM synchronously

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("am-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === "light" ? "dark" : "light") }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
