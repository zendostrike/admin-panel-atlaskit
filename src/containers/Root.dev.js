import React, { Component } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Page, { Grid, GridColumn } from "@atlaskit/page";

import DevTools from "./DevTools";
import App from "./App";

export default class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Page>
          <Grid layout="fluid">
            <Router>
              <App />
            </Router>
            <DevTools />
          </Grid>
        </Page>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
  /* routes: PropTypes.node.isRequired */
  //type: PropTypes.string.isRequired,
  //renderProps: PropTypes.any.isRequired
};
