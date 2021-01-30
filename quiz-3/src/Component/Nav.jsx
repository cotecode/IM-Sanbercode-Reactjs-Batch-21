import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Nav = () => {
  return (
    <header>
      <img id="logo" src={logo} width="200px" alt="Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/BookList">Books List Editor</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
