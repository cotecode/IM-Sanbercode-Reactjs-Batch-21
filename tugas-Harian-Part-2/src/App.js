import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Tugas-15/Routes";
import React, { useState, createContext } from "react";

export const DarkModeContext = createContext();

function App() {
  // declare state
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <DarkModeContext.Provider value={{darkModeVal:[darkMode, setDarkMode]}}>
        <Router>
          <Routes />
        </Router>
      </DarkModeContext.Provider>
    </div>
  );
}

export default App;
