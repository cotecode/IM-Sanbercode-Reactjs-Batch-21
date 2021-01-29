import React, { useContext } from "react";
import { DarkModeContext } from "../App";

export const DarkModeProvider = () => {
  const { darkModeVal } = useContext(DarkModeContext);
  const [darkMode, setDarkMode] = darkModeVal;

  return (
    <div>
      <button
        style={
          darkMode
            ? { backgroundColor: "rgb(10, 12, 53)", color: "#fff" }
            : {
                backgroundColor: "transparent",
                color: "rgb(10, 12, 53)",
                border: "2px solid rgb(10, 12, 53) ",
              }
        }
        className="btnTheme"
        onClick={() => setDarkMode((prevMode) => !prevMode)}
      >
        {darkMode
          ? "Change Navbar to Light Theme"
          : "Change Navbar to Dark Theme"}
      </button>
    </div>
  );
};

export default DarkModeProvider;
