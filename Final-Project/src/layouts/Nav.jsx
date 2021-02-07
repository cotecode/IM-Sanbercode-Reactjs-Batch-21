import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

const Nav = () => {
  let history = useHistory();
  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    history.push("/login");
  };

  const menu = (
    <Menu style={{ marginTop: "20px", background: "#001529", width: "150px" }}>
      <Menu.Item key="0">
        <Link to="/movielisteditor" style={{ color: "#edf5f5" }}>
          Settings Movie
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Link to="/gamelisteditor" style={{ color: "#edf5f5" }}>
          Settings Games
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Link to="/changepassword" style={{ color: "#edf5f5" }}>
          Change Password
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="container-fluid">
      <div className="header">
        <Link to="/" className="logo">
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
            <Dropdown overlay={menu} placement="bottomLeft">
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                href="pusing"
                style={{ color: "#edf5f5", margin: "0 30px" }}
              >
                Settings <DownOutlined style={{paddingLeft:"5px"}}/>
              </a>
            </Dropdown>
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
