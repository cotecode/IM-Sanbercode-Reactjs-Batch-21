import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../App";

const Nav = () => {
  const { darkModeVal } = useContext(DarkModeContext);
  const [darkMode, setDarkMode] = darkModeVal;
  let darkModeStyle = {
    color: darkMode ? "#fff" : "#000",
    textDecoration: "none",
  };

  return (
    <nav
      style={
        darkMode ? { backgroundColor: "#1a1919" } : { backgroundColor: "#fff" }
      }
    >
      <ul>
        <li>
          <Link to="/Tugas-9" style={darkModeStyle}>
            Tugas 9
          </Link>
        </li>
        <li>
          <Link to="/Tugas-10" style={darkModeStyle}>
            Tugas 10
          </Link>
        </li>
        <li>
          <Link to="/Tugas-11" style={darkModeStyle}>
            Tugas 11
          </Link>
        </li>
        <li>
          <Link to="/Tugas-12" style={darkModeStyle}>
            Tugas 12
          </Link>
        </li>
        <li>
          <Link to="/Tugas-13" style={darkModeStyle}>
            Tugas 13
          </Link>
        </li>
        <li>
          <Link to="/Tugas-14" style={darkModeStyle}>
            Tugas 14
          </Link>
        </li>
        <li>
          <Link to="/Tugas-15" style={darkModeStyle}>
            Tugas 15
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
