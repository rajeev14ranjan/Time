import React from "react";
import "./home.css";
import { Layout, Menu, Icon } from "antd";
import { BrowserRouter as Router,Redirect, Route, Link } from "react-router-dom";
import { DigitalClock } from "../Routers/DigitalClock";
import { AnalogClock } from "../Routers/AnalogClock";


function Home() {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  return (
    <Layout>
      <Router>
        <Header className="header">
          <div className="logo" />

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
            <Icon type="hourglass" />
              Clocks
            </Menu.Item>
            <Menu.Item key="2">
            <Icon type="user" />
              Author
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={230} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="border-horizontal" />
                    Digital Clock
                  </span>
                }
              >
                <Menu.Item key="1">
                  <Link to="/digital">LED Clock</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="clock-circle" />
                    Analog Clock
                  </span>
                }
              >
                <Menu.Item key="3">
                  <Link to="/analog">Analog Clock</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "10px" }}>
            <Content
              style={{
                background: "#fff",
                padding: "30px",
                margin: 0,
                minHeight: 280
              }}
            >
              <Redirect exact from="/" to="digital" />
              <Route  path="/digital" component={DigitalClock} />
              <Route path="/analog" component={AnalogClock} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Layout>
  );
}

export default Home;
