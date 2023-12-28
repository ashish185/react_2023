import { UPDATE_NAME_FIELD } from './../user-constant';

export const updateUserDetails = (dispatch, payload) => {
  return dispatch({
    type: UPDATE_NAME_FIELD,
    payload
  })
};