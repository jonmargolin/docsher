import { createSelector } from 'reselect';

/**
 * Direct selector to the navigationContiner state domain
 */
const selectNavigationContinerDomain = () => state => state.get('navigationContiner');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NavigationContiner
 */

const selectNavigationContiner = () => createSelector(
  selectNavigationContinerDomain(),
  (substate) => substate.toJS()
);

export default selectNavigationContiner;
export {
  selectNavigationContinerDomain,
};
