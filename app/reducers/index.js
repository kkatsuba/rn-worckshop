import { combineReducers } from 'redux';
import { auth } from './authReducer';
import { localImages } from './images';

export default combineReducers({
  auth,
  localImages
});
