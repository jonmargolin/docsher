import expect from 'expect';
import mainDraftReducer from '../reducer';
import { fromJS } from 'immutable';

describe('mainDraftReducer', () => {
  it('returns the initial state', () => {
    expect(mainDraftReducer(undefined, {})).toEqual(fromJS({}));
  });
});
