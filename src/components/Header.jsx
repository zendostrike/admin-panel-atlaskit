// @flow
import React from "react";
import PropTypes from "prop-types";
import { Layout, Icon, Row, Col } from "antd";

const { Header: AntHeader } = Layout;

const Header = ({ collapsed, toggleSidebar }) => (
  <AntHeader style={{ background: "#fff", padding: 0 }}>
    <Row type="flex" justify="start">
      <Col span={4}>
        <Icon
          className="trigger"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={toggleSidebar}
        />
      </Col>
      <Col span={8} offset={10} justify="end">
        <Row type="flex" justify="end">
          Admin
        </Row>
      </Col>
    </Row>
  </AntHeader>
);

Header.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default Header;
