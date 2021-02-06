import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
// import logo from "../img/logo.jpg";

const Nav = () => {
  let history = useHistory();
  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    history.push("/login");
  };

  // const menu = (
  //   <Menu>
  //     <Menu.Item key="0">
  //       <Link onClick={handleLogout}>Logout</Link>
  //     </Menu.Item>
  //     <Menu.Item key="1">
  //       <a href="http://www.taobao.com/">2nd menu item</a>
  //     </Menu.Item>
  //     <Menu.Divider />
  //     <Menu.Item key="3">3rd menu item</Menu.Item>
  //   </Menu>
  // );
  
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
          <Menu.Item>
            <Link to="/movies">Movies</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/games">Games</Link>
          </Menu.Item>
          {user === null && (
            <>
              <Menu.Item>
                <Link to="/login">Login</Link>
              </Menu.Item>
            </>
          )}
          {user && (
            <Menu.Item>
              <Link to="/movielisteditor">Movie List</Link>
            </Menu.Item>
          )}
          {user && (
            <Menu.Item>
              <Link onClick={handleLogout}>Logout</Link>
            </Menu.Item>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Nav;
