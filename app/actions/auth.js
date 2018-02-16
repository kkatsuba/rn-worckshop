import firebase from 'react-native-firebase';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTH_FETCHING = 'AUTH_FETCHING';

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

    dispatch(authEnd(null, user));
  } catch (e) {
    dispatch(authEnd(e));
  }
};
