const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAILURE = "FAILURE";

export const POKEMONS = createRequestTypes("POKEMONS");

export const UPDATE_ROUTER_STATE = "UPDATE_ROUTER_STATE";
export const NAVIGATE = "NAVIGATE";

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const RESET_ERROR_MESSAGE = "RESET_ERROR_MESSAGE";

function action(type, payload = {}) {
  return { type, ...payload };
}

export const pokemons = {
  request: () => action(POKEMONS[REQUEST]),
  success: response => action(POKEMONS[SUCCESS], { response }),
  failure: error => action(POKEMONS[FAILURE], { error })
};

export const updateRouterState = state =>
  action(UPDATE_ROUTER_STATE, { state });
export const navigate = pathname => action(NAVIGATE, { pathname });
export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE);
