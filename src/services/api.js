import { schema, normalize } from "normalizr";
import { camelizeKeys } from "humps";
/* eslint-disable import/no-extraneous-dependencies */
import fetch from "isomorphic-fetch";

const API_ROOT = "http://pokeapi.co/api/v2/";

function callApi(endpoint, mySchema) {
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;

  return fetch(fullUrl)
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      const camelizedJson = camelizeKeys(json);

      return Object.assign({}, normalize(camelizedJson, mySchema), {
        response
      });
    })
    .then(
      response => ({ response }),
      error => ({ error: error.message || "Something bad happened" })
    );
}

const userSchema = new schema.Entity("users", {
  name: "name"
});

const courseSchema = new schema.Entity("courses", {
  url: "url",
  name: "name"
});

const courseSchemaArray = new schema.Array(courseSchema);

export const fetchUser = url => callApi(url, userSchema);
export const fetchCourses = url => callApi(url, courseSchemaArray);
