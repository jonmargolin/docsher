/*
 *
 * MainDraft reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCEEDED
} from './constants';

const initialState = fromJS({
  data: [],
});

function mainDraftReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATA_SUCCEEDED:
      return state.set('data', action.data);
    default:
      return state;
  }
}

export default mainDraftReducer;
