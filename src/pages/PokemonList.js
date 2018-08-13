import React, { PureComponent } from "react";
import TextField from "@atlaskit/field-text";

import Table from "../components/Table";

class PokemonList extends PureComponent {
  render() {
    return (
      <div>
        <h2>Pokemon List</h2>
        <p>Esta es una lista de pokemons</p>
        <TextField
          placeholder="Buscar"
          isSpellCheckEnabled={false}
          autoFocus
          value=""
        />
        <Table />
      </div>
    );
  }
}

export default PokemonList;
