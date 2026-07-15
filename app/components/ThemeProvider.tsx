"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const initialised = useRef(false);

  // On first mount, read the theme from the DOM (set by blocking init script)
  // and sync React state. This runs once — the blocking script has already
  // set the class before React hydrates, so there's no flash.
  useEffect(() => {
    if (initialised.current) return;
    initialised.current = true;
    const domTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(domTheme);
  }, []);

  // Sync the class to the theme state (only after initialisation)
  useEffect(() => {
    if (!initialised.current) return;
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