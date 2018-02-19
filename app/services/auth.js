import { AsyncStorage } from 'react-native';

const AUTH_KEY = 'signed-in-key';

export const signOut = () => AsyncStorage.removeItem(AUTH_KEY);

export const signIn = (user) => AsyncStorage.setItem(AUTH_KEY, JSON.stringify(user));

export const isSignedIn = () =>
  AsyncStorage.getItem(AUTH_KEY)
    .then(res => !!res)
    .catch(() => false);
