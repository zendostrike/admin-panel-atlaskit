import React, { Component, Fragment } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Drawer from "@atlaskit/drawer";
import Button from "@atlaskit/button";
import MenuIcon from "@atlaskit/icon/glyph/menu";

import { navigate, resetErrorMessage, updateRouterState } from "../actions";
import Table from "../components/Table";
import PokemonList from "../pages/PokemonList";
import Welcome from "../pages/Welcome";
import Dashboard from "../pages/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: false
    };
  }

  openSidebar = () => {
    this.setState({
      isSidebarOpen: true
    });
  };

  closeSidebar = () => {
    this.setState({
      isSidebarOpen: false
    });
  };

  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.openSidebar();
          }}
          type="button"
          css={{
            marginTop: "1rem"
          }}
        >
          <MenuIcon size="medium" />
        </Button>
        <Fragment>
          <Drawer
            onClose={this.closeSidebar}
            isOpen={this.state.isSidebarOpen}
            width="narrow"
          >
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    this.closeSidebar();
                  }}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/pokemons"
                  onClick={() => {
                    this.closeSidebar();
                  }}
                >
                  Pokemons
                </Link>
              </li>
              <li>
                <Link
                  to="/welcome"
                  onClick={() => {
                    this.closeSidebar();
                  }}
                >
                  Welcome
                </Link>
              </li>
            </ul>
          </Drawer>
        </Fragment>
        {/* <hr />
        {this.renderErrorMessage()}
        {children} */}
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/pokemons" component={PokemonList} />
          <Route path="/welcome" component={Welcome} />
          <Route render={() => <div> Sorry, this page does not exist. </div>} />
        </Switch>
      </div>
    );
  }
}

// App.propTypes = {
//   // Injected by React Redux
//   errorMessage: PropTypes.string,
//   inputValue: PropTypes.string.isRequired,
//   navigate: PropTypes.func.isRequired,
//   updateRouterState: PropTypes.func.isRequired,
//   resetErrorMessage: PropTypes.func.isRequired,
//   // Injected by React Router
//   children: PropTypes.node,
//   location: PropTypes.any,
//   params: PropTypes.any
// };

// function mapStateToProps(state) {
//   return {
//     errorMessage: state.errorMessage,
//     inputValue: state.router.pathname.substring(1)
//   };
// }

// export default connect(
//   mapStateToProps,
//   {
//     navigate,
//     updateRouterState,
//     resetErrorMessage
//   }
// )(App);
export default App;
