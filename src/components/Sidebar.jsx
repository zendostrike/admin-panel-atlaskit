// @flow
import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { Item: MenuItem } = Menu;
const { Sider } = Layout;

const Sidebar = ({ items, collapsed, defaultSelectedKeys }) => (
  <Sider trigger={null} collapsible width={250} collapsed={collapsed}>
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={defaultSelectedKeys}>
      {items.map(item => (
        <MenuItem key={item.key}>
          <Link to={item.path}>
            <Icon type={item.icon} />
            <span>
              {item.title}
            </span>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  </Sider>
);

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  collapsed: PropTypes.bool.isRequired
};

export default Sidebar;
