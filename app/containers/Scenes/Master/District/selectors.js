import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the district state domain
 */

const selectDistrictDomain = state => state.district || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by District
 */

const makeSelectDistrict = () =>
	createSelector(
		selectDistrictDomain,
		substate => substate,
	);

export default makeSelectDistrict;
export {selectDistrictDomain};
