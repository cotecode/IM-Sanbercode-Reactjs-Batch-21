import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import Nav from "./Nav";
import Section from "./Section";
import Footer from "./Footer";
// import { Footer } from "antd/lib/layout/layout";

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
          <Footer />
        </Router>
      </Layout>
    </>
  );
};

export default Main;
