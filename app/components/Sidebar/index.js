/**
 *
 * Sidebar
 *
 */

import React, {useState} from 'react';
import * as Icon from "react-feather";
import {Link} from "react-router-dom";

/** @IMPORT-UTILITY **/
import QueryString from "query-string";
import history from "../../utils/history";
import global_menu from "../../utils/GlobalMenu";
import global_helper from "../../utils/GlobalHelper";
import global_label from "../../utils/GlobalLabel";
import Cookies from 'js-cookie';

function Sidebar() {
	const url_pathname = history.location.pathname;
	const explode_url_pathname = url_pathname.split('/');
	const list_action = {
		master: '',
		transaction: '',
		report: '',
	};

	if(explode_url_pathname[1] in list_action){
		list_action[explode_url_pathname[1]] = 'open';
	}

	const [show_submenu,set_show_submenu] = useState(list_action);
	const HandleOnShowSubMenu = (param_set_submenu,param_next_to='') => {
		const active_list = Object.keys(list_action).find(key => list_action[key] === 'open');
		list_action[active_list] = '';
		if(param_set_submenu === 'close-all'){
			set_show_submenu(list_action);
			history.push(param_next_to);
		}else{
			if(param_set_submenu in list_action){
				if(show_submenu[param_set_submenu] === 'open'){
					list_action[param_set_submenu] = '';
				}else{
					list_action[param_set_submenu] = 'open';
				}

				set_show_submenu(list_action);
			}
		}
	};

	const app_session_profile = global_helper.get_app_session();
	const check_is_active_url = (param_url) => {
		return url_pathname === param_url ? 'active' : '';
	};
	const lang_id = Cookies.get('STAE_Lang');
	const generate_menu = () => {
		let output;
		const key_global_menu = Object.keys(global_menu);
	};

	return (
		<>
			<div className="main-menu menu-fixed menu-light menu-accordion menu-shadow">
				<div className="navbar-header">
					<ul className="nav navbar-nav flex-row">
						<li className="nav-item mr-auto">
							<a className="navbar-brand">
								<span className="brand-logo"/>
								<h2 className="brand-text">STAE</h2>
							</a>
						</li>
						<li className="nav-item nav-toggle">
							<a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
								<Icon.X className="d-block d-xl-none text-primary toggle-icon font-medium-4"/>
							</a>
						</li>
					</ul>
				</div>
				<div className="shadow-bottom"/>
				<div className="main-menu-content">
					<ul className="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
						<li className={`nav-item ${check_is_active_url('/dashboard')}`}>
							<Link className="d-flex align-items-center" onClick={() => HandleOnShowSubMenu('close-all','/dashboard')}>
								<Icon.Home/>
								<span className="menu-title text-truncate text-capitalize">{global_label.menu_dashboard[lang_id]}</span>
							</Link>
						</li>
						<li className={`nav-item ` + ('master' in show_submenu ? show_submenu.master : '')}>
							<Link className="d-flex align-items-center" onClick={() => HandleOnShowSubMenu('master')}>
								<Icon.Framer/>
								<span className="menu-title text-truncate text-capitalize" data-i18n="Invoice">{global_label.menu_master[lang_id]}</span>
							</Link>
							<ul className="menu-content">
								<li className={check_is_active_url('/master/district')}>
									<Link to="/master/district" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Distrik</span>
									</Link>
								</li>
								<li>
									<Link to="/master/director" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Direktor</span>
									</Link>
								</li>
								<li>
									<Link to="/master/adb" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">ADB</span>
									</Link>
								</li>
								<li>
									<Link to="/master/country" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Negara</span>
									</Link>
								</li>
								<li>
									<Link to="/master/pc" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Komputer</span>
									</Link>
								</li>
								<li>
									<Link to="/master/connection" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Koneksi</span>
									</Link>
								</li>
								<li>
									<Link to="/master/table-sync" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Sinkronisasi</span>
									</Link>
								</li>
							</ul>
						</li>
						<li className={`nav-item ` + ('transaction' in show_submenu ? show_submenu.transaction : '')}>
							<Link className="d-flex align-items-center" onClick={() => HandleOnShowSubMenu('transaction')}>
								<Icon.Database/>
								<span className="menu-title text-truncate text-capitalize" data-i18n="Invoice">{global_label.menu_transaction[lang_id]}</span>
							</Link>
							<ul className="menu-content">
								<li>
									<Link to="/master/district" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Buletin</span>
									</Link>
								</li>
								<li>
									<Link to="/master/director" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Cetak Buletin</span>
									</Link>
								</li>
								<li>
									<Link to="/master/adb" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Tampil Data Elektor (Server)</span>
									</Link>
								</li>
								<li>
									<Link to="/master/country" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Pendaftaran Pemilih (Nasional)</span>
									</Link>
								</li>
								<li>
									<Link to="/master/pc" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Koreksi Data Pemilih (Nasional)</span>
									</Link>
								</li>
							</ul>
						</li>
						<li className={`nav-item ` + ('report' in show_submenu ? show_submenu.report : '')}>
							<Link className="d-flex align-items-center" onClick={() => HandleOnShowSubMenu('report')}>
								<Icon.Clipboard/>
								<span className="menu-title text-truncate text-capitalize" data-i18n="Invoice">{global_label.menu_report[lang_id]}</span>
							</Link>
							<ul className="menu-content">
								<li>
									<Link to="/master/district" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Daftar Wilayah</span>
									</Link>
								</li>
								<li>
									<Link to="/master/director" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Pendaftaran Elektor</span>
									</Link>
								</li>
								<li>
									<Link to="/master/adb" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Update Data Pemilih (ADB)</span>
									</Link>
								</li>
								<li>
									<Link to="/master/country" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Daftar Elektor</span>
									</Link>
								</li>
								<li>
									<Link to="/master/pc" className="d-flex align-items-center">
										<Icon.Circle/>
										<span className="menu-item text-truncate" data-i18n="List">Sinkron Data Elektor</span>
									</Link>
								</li>
							</ul>
						</li>
						{/*{Object.keys(global_menu).map((item,index_item) => {*/}
						{/*	if('sub' in global_menu[item]){*/}
						{/*		return (*/}
						{/*			<li className={`nav-item ${item in show_submenu ? show_submenu[item] : ''}`}>*/}
						{/*				<Link className="d-flex align-items-center" onClick={() => HandleOnShowSubMenu(item)}>*/}
						{/*					{global_menu[item]['parent']['icon']}*/}
						{/*					<span className="menu-title text-truncate">{global_menu[item]['parent']['title'][app_session_profile.lang_id]}</span>*/}
						{/*				</Link>*/}
						{/*				<ul className="menu-content">*/}
						{/*					{Object.keys(global_menu[item]['sub']).map((sub_item,index_sub_item) => (*/}
						{/*						<li className={check_is_active_url(global_menu[item]['sub'][sub_item]['url'])}>*/}
						{/*							<Link to={global_menu[item]['sub'][sub_item]['url']} className="d-flex align-items-center">*/}
						{/*								<Icon.Circle/>*/}
						{/*								<span className="menu-item text-truncate">{global_menu[item]['sub'][sub_item]['title'][app_session_profile.lang_id]}</span>*/}
						{/*							</Link>*/}
						{/*						</li>*/}
						{/*					))}*/}
						{/*				</ul>*/}
						{/*			</li>*/}
						{/*		)*/}
						{/*	}else{*/}
						{/*		return (*/}
						{/*			<li className={`nav-item ${check_is_active_url(global_menu[item]['parent']['url'])}`}>*/}
						{/*				<Link to="" className="d-flex align-items-center" onClick={() => HandleOnShowSubMenu('close-all',global_menu[item]['parent']['url'])}>*/}
						{/*					{global_menu[item]['parent']['icon']}*/}
						{/*					<span className="menu-title text-truncate">{global_menu[item]['parent']['title'][app_session_profile.lang_id]}</span>*/}
						{/*				</Link>*/}
						{/*			</li>*/}
						{/*		)*/}
						{/*	}*/}
						{/*})}*/}
					</ul>
				</div>
			</div>
		</>
	);
}

Sidebar.propTypes = {};

export default Sidebar;
