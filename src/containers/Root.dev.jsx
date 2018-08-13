import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import DevTools from "./DevTools";
import App from "./App";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Router>
        <App />
      </Router>
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired
};

export default Root;
