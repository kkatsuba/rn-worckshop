import firebase from 'react-native-firebase';
import { signOut, signIn } from '../services/auth';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTH_FETCHING = 'AUTH_FETCHING';
export const SIGN_IN_VALIDATED = 'SIGN_IN_VALIDATED';

export const signInValidated = (isSignIn) => ({
  type: SIGN_IN_VALIDATED,
  isSignIn
});

const authFetching = () => ({
  type: AUTH_FETCHING
});

const authEnd = (error, user) => ({
  type: LOG_IN,
  error, user
});

export const signUp = (email, passw, name) => async dispatch => {
  dispatch(authFetching());
  try {
    const user = { email, name };

    const authResponse = await firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, passw);
    await firebase.database().ref(`users/${authResponse.user.uid}`).set(user);
    await signIn({ ...user.toJSON(), uid: authResponse.user.uid });

    dispatch(authEnd(null, user));
  } catch (e) {
    dispatch(authEnd(e));
  }
};

export const logIn = (email, passw) => async dispatch => {
  dispatch(authFetching());
  try {
    const authResponse = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, passw);
    const user = await firebase.database().ref(`users/${authResponse.user.uid}`).once('value');
    await signIn({ ...user.toJSON(), uid: authResponse.user.uid });

    dispatch(authEnd(null, user));
  } catch (e) {
    dispatch(authEnd(e));
  }
};

export const logOut = () => async dispatch => {
  dispatch({ type: LOG_OUT });
  await signOut();
};
