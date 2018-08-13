import * as React from "react";
import { render } from "react-dom";

import Root from "./containers/Root";
import configureStore from "./store/configureStore";
import rootSaga from "./sagas";

/* eslint no-underscore-dangle: 0 */
const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

render(<Root store={store} />, document.getElementById("root"));
