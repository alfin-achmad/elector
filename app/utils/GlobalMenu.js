import global_url from "./GlobalURL";
import * as Icon from "react-feather";

const url_parent_list = {
	dashboard: '/dashboard',
	master: '/master',
	transaction: '/transaction'
}

export default {
	dashboard: {
		parent: {
			url: '/dashboard',
			title: ['dashboard','beranda'],
			icon: Icon.Home
		}
	},
	master: {
		parent: {
			url: '',
			title: ['master','master'],
			icon: Icon.Framer
		},
		sub: {
			district: {
				url: url_parent_list.master + '/district',
				title: ['district','distrik'],
			},
			director: {
				url: url_parent_list.master + '/director',
				title: ['director','direktur'],
			},
			adb: {
				url: url_parent_list.master + '/adb',
				title: ['adb','adb'],
			},
			country: {
				url: url_parent_list.master + '/country',
				title: ['country','negara'],
			},
			pc_operator: {
				url: url_parent_list.master + '/pc-operator',
				title: ['PC operator','operator komputer'],
			},
			connection: {
				url: url_parent_list.master + '/connection',
				title: ['connection','koneksi'],
			},
			table_sync: {
				url: url_parent_list.master + '/table-sync',
				title: ['table synchronization','sinkronisasi'],
			},
		}
	}
}
