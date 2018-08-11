import { schema, arrayOf, normalize } from "normalizr";
import "isomorphic-fetch";

const API_ROOT = "http://pokeapi.co/api/v2/";

function callApi(endpoint, schema) {
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);

      return Object.assign({}, normalize(camelizedJson, schema), {
        response
      });
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || "Something bad happened" })
    );
}

const pokemonSchema = new schema.Entity("pokemons", {
  url: "url",
  name: "name"
});

const pokemonSchemaArray = new schema.Array(pokemonSchema);

export const fetchPokemons = url => callApi(url, pokemonSchemaArray);
