// src/App.js
import React from "react";
import "./App.css";
import RegexChecker from "./RegexChecker";

function App() {
  return (
    <div className="App">
      <RegexChecker />

      <footer>
        &copy; <a href="https://akihiro.dev">akihiro.dev</a> -{" "}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
