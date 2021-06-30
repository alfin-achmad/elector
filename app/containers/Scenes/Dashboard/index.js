/**
 *
 * Dashboard
 *
 */

import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {useInjectSaga} from 'utils/injectSaga';
import {useInjectReducer} from 'utils/injectReducer';
import makeSelectDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Dashboard() {
	useInjectReducer({key: 'dashboard', reducer});
	useInjectSaga({key: 'dashboard', saga});

	return (
		<>
			<div className="content-header row">
				<div className="content-header-left col-md-9 col-12 mb-2">
					<div className="row breadcrumbs-top">
						<div className="col-12">
							<h2 className="content-header-title float-left mb-0">Dashboard</h2>
							<div className="breadcrumb-wrapper">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a>STAE</a></li>
									<li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content-body">
				<div className="row">
					<div className="col-12">

					</div>
				</div>
			</div>
		</>
	);
}

Dashboard.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
	return {
		dispatch,
	};
}

const withConnect = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default compose(
	withConnect,
	memo,
)(Dashboard);
