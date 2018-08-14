import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import DocumentTitle from "react-document-title";
import classNames from "classnames";
import { ContainerQuery } from "react-container-query";
import { Route, HashRouter, Switch } from "react-router-dom";
import "antd/dist/antd.css";

import routes from "../config/routes";
import queries from "../config/media-queries";
import Sidebar from "../components/Sidebar";

import "../index.css";

const { Item: MenuItem } = Menu;
const { Sider, Content, Header } = Layout;

const menuUrl = {
  "/": ["cursos"],
  "/clases": ["clases"]
};

class App extends Component {
  state = {
    isSidebarCollapsed: false
  };

  toggleSidebar = () => {
    this.setState(({ isSidebarCollapsed }) => ({
      isSidebarCollapsed: !isSidebarCollapsed
    }));
  };

  render() {
    const { isSidebarCollapsed } = this.state;

    const layout = (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar
          items={routes}
          collapsed={isSidebarCollapsed}
          defaultSelectedKeys={["dashboard"]}
        />
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={isSidebarCollapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggleSidebar}
            />
          </Header>
          <Content
            style={{ margin: "24px 16px", padding: 24, background: "#fff" }}
          >
            <Switch>
              {routes.map(({ path, component, exact }) => (
                <Route
                  key={path}
                  path={path}
                  component={component}
                  exact={exact}
                />
              ))}
              <Route
                render={() => (
                  <div>
                    {`Sorry, this page does not exist.`}
                  </div>
)}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
    return (
      <DocumentTitle title="Admin Aprendiendo.la">
        <ContainerQuery query={queries}>
          {params => (
            <div className={classNames(params)}>
              {layout}
            </div>
)}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

// const AppWithHashRouter = () => (
//   <HashRouter>
//     <Route path="/" component={App} />
//   </HashRouter>
// );

export default App;
