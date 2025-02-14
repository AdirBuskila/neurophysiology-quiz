import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <h1>🧠 Neurophysiology Quiz</h1>
      <button className="toggle-dark-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
      <Quiz />
    </div>
  );
};

export default App;
