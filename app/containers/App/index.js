/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

/** @IMPORT-INTERNAL-LIBRARY **/
import React, {useEffect} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {Helmet} from "react-helmet";

/** @IMPORT-SCENES **/
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SignIn from "../SignIn";
import Dashboard from "../Scenes/Dashboard";
import District from "../Scenes/Master/District";

/** @IMPORT-COMPONENT **/
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

/** @IMPORT-EXTERNAL-LIBRARY **/
import Cookies from "js-cookie";

/** @IMPORT-BASE-CSS **/
import "../../app-assets/vendors/css/vendors.min.css";
import "../../app-assets/vendors/css/tables/datatable/datatables.min.css";
import "../../app-assets/vendors/css/tables/datatable/responsive.bootstrap.min.css";
import "../../app-assets/css/bootstrap.css";
import "../../app-assets/css/bootstrap-extended.css";
import "../../app-assets/css/colors.css";
import "../../app-assets/css/components.css";
import "../../app-assets/css/style.css";
import image_user_avatar from "../../app-assets/images/portrait/small/avatar-s-11.jpg";

/** @IMPORT-UTILITY **/
import history from "../../utils/history";
import global_config from "../../utils/GlobalConfig";
import global_helper from "../../utils/GlobalHelper";
import global_url from "../../utils/GlobalURL";
import global_label from "../../utils/GlobalLabel";

export default function App() {
	const location_pathname = history.location.pathname;
	const app_session_profile = global_helper.get_app_session();
	const explode_url = location_pathname.split('/');
	const list_segment = explode_url.filter(Boolean);
	const module_segment = list_segment[2];
	const module_component_segment = list_segment[3];

	if(Cookies.get('STAE_Lang') === undefined){
		Cookies.set('STAE_Lang', app_session_profile.lang_id);
	}

	const PrivateRoute = ({component: Component, ...lists}) => {
		if (app_session_profile.is_authenticated === false) {
			history.push({
				pathname: global_url.sign_in,
				state: {
					title: global_label.sign_in_warning,
					message: global_label.sign_in_warning_message
				}
			});
		}

		return (
			<Route {...lists} render={props => {
				return (
					<>
						<Helmet>
							<title>{global_config.name_alias}</title>
							<meta name="description" content={global_config.description}/>
						</Helmet>
						<Navbar app_session={app_session_profile} app_user_avatar={image_user_avatar}/>
						<Sidebar app_session={app_session_profile}/>
						<div className="app-content content ">
							<div className="content-overlay"/>
							<div className="header-navbar-shadow"/>
							<div className="content-wrapper">
								<Component {...props}/>
							</div>
						</div>

					</>
				)
			}}/>
		);
	};

	return (
		<>
			<Switch>
				<Route exact path="/sign-in" component={SignIn}/>
				<PrivateRoute exact path="/dashboard" component={Dashboard}/>
				<PrivateRoute exact path="/master/district" component={District}/>
				<Route path="*" component={NotFoundPage}/>
			</Switch>
		</>
	);
}
