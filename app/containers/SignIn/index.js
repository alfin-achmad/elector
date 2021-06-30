/**
 *
 * SignIn
 *
 */

/** @IMPORT-INTERNAL-LIBRARY **/
import React, {memo,useEffect} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

/** @IMPORT-REDUX-ENVIRONMENT **/
import {useInjectSaga} from 'utils/injectSaga';
import {useInjectReducer} from 'utils/injectReducer';
import makeSelectSignIn from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/** @IMPORT-EXTERNAL-LIBRARY **/
import * as Icon from "react-feather";

/** @IMPORT-PAGE-CSS **/
import "../../app-assets/css/core/menu/menu-types/vertical-menu.css";
import "../../app-assets/css/plugins/forms/form-validation.css";
import "../../app-assets/css/pages/page-auth.css";

/** @IMPORT-UTILITY **/
import global_config from "../../utils/GlobalConfig";
import global_helper from "../../utils/GlobalHelper";
import global_label from "../../utils/GlobalLabel";
import local_url from "./Utils/URLMenu";
import local_label from "./Utils/Label";

export function SignIn() {
	useInjectReducer({key: 'signIn', reducer});
	useInjectSaga({key: 'signIn', saga});

	useEffect(() => {
		document.body.classList.add('blank-page');
	}, []);

	const label = {
		local: global_helper.set_localize(local_label),
		global: global_helper.set_localize(global_label),
	};

	return (
		<>
			<div className="app-content content">
				<div className="content-overlay"/>
				<div className="header-navbar-shadow"/>
				<div className="content-wrapper">
					<div className="content-header row">
					</div>
					<div className="content-body">
						<div className="auth-wrapper auth-v1 px-2">
							<div className="auth-inner py-2">
								<div className="card mb-0 rounded-0 shadow-md">
									<div className="card-body">
										<Link to={local_url.sign_in} className="brand-logo">
											<h2 className="brand-text text-primary ml-1">{global_config.short_name}</h2>
										</Link>
										<h4 className="card-title mb-0 text-capitalize">{label.local.welcome}</h4>
										<p className="card-text mb-2 text-capitalize">{label.local.sub_heading_text}</p>

										<div className="form-group">
											<label htmlFor="login-email"
												   className="form-label text-capitalize">{label.local.username}</label>
											<input type="text" className="form-control rounded-0" id="login-email"
												   name="login-email" placeholder="GUEST" aria-describedby="login-email"
												   tabIndex="1" autoFocus/>
										</div>

										<div className="form-group">
											<div className="d-flex justify-content-between">
												<label htmlFor="login-password"
													   className="text-capitalize">{label.local.password}</label>
												<a href="">
													<small
														className="text-capitalize">{label.local.forgot_password}</small>
												</a>
											</div>
											<div className="input-group input-group-merge form-password-toggle">
												<input type="password"
													   className="form-control form-control-merge rounded-0"
													   id="login-password" name="login-password" tabIndex="2"
													   placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
													   aria-describedby="login-password"/>
												<div className="input-group-append">
														<span className="input-group-text cursor-pointer rounded-0">
															<Icon.Eye/>
														</span>
												</div>
											</div>
										</div>
										<div className="form-group">
											<div className="custom-control custom-checkbox">
												<input className="custom-control-input" type="checkbox"
													   id="remember-me" tabIndex="3"/>
												<label className="custom-control-label text-capitalize"
													   htmlFor="remember-me">{label.local.remember_me}</label>
											</div>
										</div>
										<button className="btn btn-primary btn-block rounded-0 text-capitalize"
												tabIndex="4">{label.local.sign}</button>

										<p className="text-center mt-2">
											<span className="text-capitalize">{label.local.register_info}</span>
										</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</>
	);
}

SignIn.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
	signIn: makeSelectSignIn(),
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
)(SignIn);
