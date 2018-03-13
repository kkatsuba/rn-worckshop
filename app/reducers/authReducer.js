import { LOG_IN, LOG_OUT, AUTH_FETCHING, SIGN_IN_VALIDATED } from '../actions/auth';

const defaultState = {
  isSignInValidated: false,
  isSignIn: null,
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
        user: action.user,
        isSignIn: true
      };
    case LOG_OUT:
      return {
        ...state,
        isFetching: false,
        error: null,
        user: null,
        isSignIn: false
      };
    case SIGN_IN_VALIDATED:
      return {
        ...state,
        isSignInValidated: true,
        isSignIn: action.isSignIn
      };
    default:
      return state;
  }
};
