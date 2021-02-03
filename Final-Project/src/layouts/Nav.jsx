import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { UserContext } from "../context/UserContext";
// import logo from "../img/logo.jpg";

const Nav = () => {
  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <Link to="/" className="logo">
          {/* <img src={logo} alt="" height="50" /> */}
          <i class="fas fa-caret-square-right"></i>
          <span style={{ color: "yellow" }}>
            {" "}
            <b>PSCYCHE</b>{" "}
          </span>
          <span style={{ color: "rgb(105, 39, 105)" }}>
            <b>REVIEW</b>
          </span>
        </Link>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          {user === null && (
            <>
              <Menu.Item>
                <Link to="/Register">Register</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/Login">Login</Link>
              </Menu.Item>
            </>
          )}
          {user && (
            <Menu.Item>
              <span onClick={handleLogout}>Logout</span>
            </Menu.Item>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Nav;
