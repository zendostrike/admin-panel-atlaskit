import { combineReducers } from "redux";
import { merge } from "lodash";

import * as ActionTypes from "../actions";

// Updates an entity cache in response to any action with response.entities.
function entities(state = { courses: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }

  return state;
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  }
  if (error) {
    return action.error;
  }

  return state;
}

function router(state = { pathname: "/" }, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_ROUTER_STATE:
      return action.state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  entities,
  errorMessage,
  router
});

export default rootReducer;
