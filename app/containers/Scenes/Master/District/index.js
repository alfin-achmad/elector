/**
 *
 * District
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
import makeSelectDistrict from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import * as Icon from "react-feather";
import DataTable from "react-data-table-component";

import "../../../../app-assets/css/pages/app-invoice-list.css";

export function District() {
	useInjectReducer({key: 'district', reducer});
	useInjectSaga({key: 'district', saga});

	const column = [{
		name: 'NO',
		selector: 'no',
		center: 'yes',
		width: '50px',
		sortable: false,
	}, {
		name: 'Name',
		center: true,
		selector: 'id',
	}, {
		name: 'Action',
		minWidth: '150px',
		center: true,
		sortable: false,
	},];

	return (
		<>
			<div className="content-header row">
				<div className="content-header-left col-md-9 col-12 mb-2">
					<div className="row breadcrumbs-top">
						<div className="col-12">
							<h2 className="content-header-title float-left mb-0">Wilayah</h2>
							<div className="breadcrumb-wrapper">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a>STAE</a></li>
									<li className="breadcrumb-item"><a>Master</a></li>
									<li className="breadcrumb-item"><a href="/master/district">Wilayah</a></li>
								</ol>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content-body">
				<div className="card bg-white rounded-0">
					<div className="card-header">
						<button className="btn btn-primary btn-sm rounded-0 float-right"><Icon.PlusSquare/> Tambah</button>
					</div>
					<div className="card-body">
						<div className="tab-content">
							<table className="table table-bordered table-striped table-sm">
								<thead>
								<tr>
									<th className="text-center">#</th>
									<th className="text-center">Nama Distrik</th>
									<th className="text-center">Kode</th>
									<th className="text-center">Kelompok</th>
									<th className="text-center">Keterangan</th>
								</tr>
								</thead>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

District.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	district: makeSelectDistrict(),
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
)(District);
