import { IMAGES_FETCHING, SET_IMAGES } from '../actions/images';

const defaultState = {
  isFetching: false,
  images: [],
  cursor: null,
  hasNext: null
};

export const localImages = (state = defaultState, action) => {
  switch (action.type) {
    case IMAGES_FETCHING:
      return { ...state, isFetching: true };
    case SET_IMAGES:
      return {
        isFetching: false,
        images: state.images.concat(action.images),
        cursor: action.cursor,
        hasNext: action.hasNext
      };
    default:
      return state;
  }
};
