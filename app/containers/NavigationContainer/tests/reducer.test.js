import expect from 'expect';
import navigationContinerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('navigationContinerReducer', () => {
  it('returns the initial state', () => {
    expect(navigationContinerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
