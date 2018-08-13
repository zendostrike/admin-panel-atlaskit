/* eslint-disable no-constant-condition */
import { put, call, select, takeLatest } from "redux-saga/effects";
import { api } from "../services";
import * as actions from "../actions";
import { getCourses } from "../reducers/selectors";

// each entity defines 3 creators { request, success, failure }
const { courses } = actions;

/* Subroutines */

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
export const fetchCourses = fetchEntity.bind(null, courses, api.fetchCourses);

// load courses unless it is cached
function* loadCourses() {
  const selectedCourses = yield select(getCourses);
  if (!selectedCourses) {
    yield call(fetchCourses);
  }
}

/* Watchers */

export default function* root() {
  yield takeLatest("COURSES_REQUEST", loadCourses);
}
