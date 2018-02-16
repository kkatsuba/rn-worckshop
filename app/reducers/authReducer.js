import { LOG_IN, LOG_OUT, AUTH_FETCHING } from '../actions/auth';

const defaultState = {
  isFetching: false,
  error: null,
  user: null
};

export const auth = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_FETCHING:
      return { ...state, isFetching: true };
    case LOG_IN:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        user: action.user
      };
    case LOG_OUT:
      return {
        ...state,
        isFetching: false,
        error: null,
        user: null
      };
    default:
      return state;
  }
};
