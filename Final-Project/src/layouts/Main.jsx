import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import Nav from "./Nav";
import Section from "./Section";

const { Header, Content } = Layout;

const Main = () => {
  return (
    <>
      <Layout className="mainLayout">
        <Router>
          <Header>
            <Nav />
          </Header>
          <Content>
            <Section />
          </Content>
        </Router>
      </Layout>
    </>
  );
};

export default Main;
