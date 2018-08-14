/* eslint-disable no-constant-condition */
import { put, call, select, take, fork, all } from "redux-saga/effects";
import { api, history } from "../services";
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
  console.log("Loading courses");
  const selectedCourses = yield select(getCourses);
  if (!selectedCourses) {
    yield call(fetchCourses);
  }
}

/* Watchers */
// trigger router navigation via history
function* watchNavigate() {
  while (true) {
    const { pathname } = yield take(actions.NAVIGATE);
    yield history.push(pathname);
  }
}

function* watchLoadCoursesPage() {
  while (true) {
    yield take(actions.LOAD_COURSES_PAGE);
    yield fork(loadCourses);
  }
}

export default function* root() {
  yield all([fork(watchNavigate), fork(watchLoadCoursesPage)]);
}
