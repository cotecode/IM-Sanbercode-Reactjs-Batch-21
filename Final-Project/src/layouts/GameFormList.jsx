import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  PlusCircleOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import GameForm from "../pages/Forms/GameForm";

const { SubMenu } = Menu;
const { Sider } = Layout;

const GameFormList = () => {
return (
  <Layout
    className="container-fluid"
    style={{
      background: "#fff",
      minHeight: "100vh",
      boxSizing: "border-box",
    }}
  >
    <Sider width={280} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<FolderOpenOutlined />} title="List">
          <Menu.Item key="1">
            <Link to="/movielisteditor">Movie List</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/gamelisteditor">Game List</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<PlusCircleOutlined />} title="Add New">
          <Menu.Item key="5">
            <Link to="/addMovie">Movie</Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/addGame">Game</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<UserOutlined />} title="Account">
          <Menu.Item key="1">
            <Link to="/changepassword">Change Password</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <GameForm />
  </Layout>
);
}

export default GameFormList