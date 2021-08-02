/**
 *
 * Navbar
 *
 */

import React, {useState} from 'react';
import * as Icon from "react-feather";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
import history from '../../utils/history';

import BSNavbar from "react-bootstrap/Navbar";
import BSNav from "react-bootstrap/Nav";
import BSNavDropDown from "react-bootstrap/NavDropdown";

function Navbar({app_user_avatar, app_session}) {

	const [dropdown_language, set_dropdown_language] = useState('');
	const [dropdown_user_profile, set_dropdown_user_profile] = useState('');
	const [app_language, set_app_language] = useState(0);
	
	const handle_dropdown = (action_from) => {
		if (action_from === 'language') {
			if (dropdown_language === 'show') {
				set_dropdown_language('');
			} else {
				set_dropdown_language('show');
			}
		} else if (action_from === 'user_profile') {
			if (dropdown_user_profile === 'show') {
				set_dropdown_user_profile('');
			} else {
				set_dropdown_user_profile('show');
			}
		}
	};

	const handle_active_language = (action_from) => {
		Cookies.set('STAE_Lang', action_from);
		history.push(history.location.pathname);
	};

	return (
		<nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-light shadow-sm rounded-0">
			<div className="navbar-container d-flex content pt-0 pb-0">
				<div className="bookmark-wrapper d-flex align-items-center">
					<ul className="nav navbar-nav d-xl-none">
						<Link className="nav-item">
							<a className="nav-link menu-toggle" href="javascript:void(0);"><Icon.Menu/></a></Link>
					</ul>
					<ul className="nav navbar-nav bookmark-icons">
						<li className="nav-item d-none d-lg-block">
							<Link className="nav-link">
								<Icon.Mail/>
							</Link>
						</li>
					</ul>
					<ul className="nav navbar-nav">
						<li className={`nav-item dropdown dropdown-language ${dropdown_language}`}>
							<a onBlur={() => set_dropdown_language('')} className="nav-link dropdown-toggle" id="dropdown-flag" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => handle_dropdown('language')}>
								<i className="flag-icon flag-icon-us  border-dark"/>
								<span className="selected-language">English</span>
							</a>
							<div className="dropdown-menu dropdown-menu-left rounded-0">
								<a className="dropdown-item" onClick={() => handle_active_language(0)}>
									<i className="flag-icon flag-icon-us"/> English
								</a>
								<a className="dropdown-item" onClick={() => handle_active_language(1)}>
									<i className="flag-icon flag-icon-id"/> Indonesia
								</a>
								<a className="dropdown-item" onClick={() => handle_active_language(3)}>
									<i className="flag-icon flag-icon-tl"/> Tetun
								</a>
								<a className="dropdown-item" onClick={() => handle_active_language(2)}>
									<i className="flag-icon flag-icon-pt"/> Portuguese
								</a>
							</div>
						</li>
					</ul>
				</div>
				<ul className="nav navbar-nav align-items-center ml-auto">
					<li className={`nav-item dropdown dropdown-user ${dropdown_user_profile}`}>
						<a onBlur={() => set_dropdown_user_profile('')} onClick={() => handle_dropdown('user_profile')}
						   className="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user"
						   href="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<div className="user-nav d-sm-flex d-none">
								<span className="user-name font-weight-bolder">{app_session.username}</span>
								<span className="user-status text-capitalize">{app_session.rolename}</span>
							</div>
							<span className="avatar">
								<img className="round" src={app_user_avatar} alt="avatar" height="40" width="40"/>
								<span className="avatar-status-online"/>
							</span>
						</a>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-user">
							<Link className="dropdown-item" to="page-profile.html">
								<Icon.User className="mr-50"/> Profile
							</Link>
							<Link className="dropdown-item" to="app-email.html">
								<Icon.Mail className="mr-50"/> Inbox
							</Link>
							<Link className="dropdown-item" to="page-auth-login-v2.html">
								<Icon.Power className="mr-50"/> Sign Out
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	)
}

Navbar.propTypes = {};

export default Navbar;
