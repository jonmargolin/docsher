import { createSelector } from 'reselect';

/**
 * Direct selector to the mainDraft state domain
 */
const selectMainDraftDomain = () => state => state.get('mainDraft');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainDraft
 */

const selectMainDraft = () => createSelector(
  selectMainDraftDomain(),
  (substate) => substate.toJS()
);

export default selectMainDraft;
export {
  selectMainDraftDomain,
};
