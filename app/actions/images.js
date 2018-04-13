import { CameraRoll } from 'react-native';
export const IMAGES_FETCHING = 'IMAGES_FETCHING';
export const SET_IMAGES = 'SET_IMAGES';

const loading = () => ({
  type: IMAGES_FETCHING
});

const setLocalImages = (images, cursor, hasNext) => ({
  type: SET_IMAGES,
  images, cursor, hasNext
});

export const getLocalImages = (cursor, first) => async dispatch => {
  dispatch(loading());
  const config = {
    first,
    after: cursor
  };

  const rollResponse = await CameraRoll.getPhotos(config);
  const pageInfo = rollResponse.page_info;
  dispatch(setLocalImages(rollResponse.edges, pageInfo.end_cursor, pageInfo.has_next_page));
};
