import * as React from "react";
import { Route } from "react-router-dom";
import App from "./containers/App";
import PokemonList from "./pages/PokemonList";

// import UserPage from "./containers/UserPage";
// import RepoPage from "./containers/RepoPage";

export default (
  <Route path="/" component={App}>
    <Route path="/:pokemons" component={PokemonList} />
  </Route>
);
