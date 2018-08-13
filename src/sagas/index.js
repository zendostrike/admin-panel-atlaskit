/* eslint-disable no-constant-condition */
import { take, put, call, fork, select, all } from "redux-saga/effects";
import { api } from "../services";
import * as actions from "../actions";
import { getPokemons } from "../reducers/selectors";

// each entity defines 3 creators { request, success, failure }
const { pokemons } = actions;

/***************************** Subroutines ************************************/

// resuable fetch Subroutine
// entity :  pokemons | ...
// apiFn  : api.fetchPokemons | ...
// id     : login | fullName
// url    : next page url. If not provided will use pass id to apiFn
function* fetchEntity(entity, apiFn, id, url) {
  yield put(entity.request(id));
  const { response, error } = yield call(apiFn, url || id);
  if (response) yield put(entity.success(id, response));
  else yield put(entity.failure(id, error));
}

// yeah! we can also bind Generators
export const fetchPokemons = fetchEntity.bind(
  null,
  pokemons,
  api.fetchPokemons
);

// load pokemons unless it is cached
function* loadPokemons({}, requiredFields) {
  const pokemons = yield select(getPokemons);
  if (!pokemons) {
    yield call(apiFetchPokemons);
  }
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

function* watchLoadPokemons() {
  while (true) {
    yield take(actions.LOAD_POKEMONS);
    yield fork(loadPokemons);
  }
}

export default function* root() {
  yield all([fork(watchLoadPokemons)]);
}
