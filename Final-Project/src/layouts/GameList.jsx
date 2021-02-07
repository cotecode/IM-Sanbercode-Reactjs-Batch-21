import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import TableGame from "../pages/TableGames/TableGame";

const { SubMenu } = Menu;
const { Sider } = Layout;

const GameList = () => {
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
          <SubMenu key="sub1" icon={<LaptopOutlined />} title="List">
            <Menu.Item key="1">
              <Link to="/movielisteditor">Movie List</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/gamelisteditor">Game List</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<NotificationOutlined />} title="Add New">
            <Menu.Item key="5">Movie</Menu.Item>
            <Menu.Item key="6">Games</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title="Account">
            <Menu.Item key="1">Change Password</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <TableGame />
    </Layout>
  );
};

export default GameList;
