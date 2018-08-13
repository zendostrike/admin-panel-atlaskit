const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

// Entities
export const COURSES = createRequestTypes("COURSES");

export const UPDATE_ROUTER_STATE = "UPDATE_ROUTER_STATE";
export const NAVIGATE = "NAVIGATE";
export const LOAD_POKEMONS = "LOAD_POKEMONS";
export const RESET_ERROR_MESSAGE = "RESET_ERROR_MESSAGE";

function action(type, payload = {}) {
  return { type, ...payload };
}

export const courses = {
  request: () => action(COURSES[REQUEST]),
  success: response => action(COURSES[SUCCESS], { response }),
  failure: error => action(COURSES[FAILURE], { error })
};

export const updateRouterState = state =>
  action(UPDATE_ROUTER_STATE, { state });
export const navigate = pathname => action(NAVIGATE, { pathname });

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);
