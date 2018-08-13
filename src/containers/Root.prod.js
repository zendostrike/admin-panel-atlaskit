import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Router, RouterContext } from "react-router";

export default class Root extends Component {
  render() {
    const { store, routes } = this.props;
    console.log("prod Root");
    return (
      <Provider store={store}>
        <Router routes={routes} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.node.isRequired
};
