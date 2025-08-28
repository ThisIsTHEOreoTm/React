import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemedText() {
  const { theme } = useContext(ThemeContext);

  return (
    <p
      style={{
        fontSize: "18px",
        color: theme === "light" ? "#000" : "#fff",
        backgroundColor: theme === "light" ? "#ca3c3cff" : "#222",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      This text changes style {theme} with the theme!
    </p>
  );
}
