import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleLight = () => setTheme("light");
  const toggleDark = () => setTheme("dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleLight, toggleDark }}>
      <div className={theme === "light" ? "light-theme" : "dark-theme"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
