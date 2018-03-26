/*
 *
 * MainDraft actions
 *
 */

import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCEEDED,
  REQUEST_DATA_FAILED
} from './constants';

export function request_Data() {
  return {
    type: REQUEST_DATA,
  };
  export function request_Data_succeeded(data) {
    return {
      type: REQUEST_DATA_SUCCEEDED,
      data,
    };
  }
  export function request_Data_Failed(msg) {
    return {
      type: REQUEST_DATA_FAILED,
      msg,
    };
  }
}
