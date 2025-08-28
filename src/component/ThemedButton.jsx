import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#ca3c3cff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        margin: "10px",
      }}
    >
      Current Theme: {theme} 
    </button>
  );
}
