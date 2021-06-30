export default {
	set_localize: (params,set_key='') => {
		let output = {};
		const lang_id = 0;

		if(typeof params === 'object' && params !== null){
			const new_list = {};
			Object.keys(params).map((item,index_item) => {
				new_list[item] = params[item][lang_id];
			});

			output = new_list;
		}

		return output;
	},
	get_app_session: () => {
		return {
			is_authenticated: true,
			modul_accessible: [{elector: ["front"]}],
			role_permission: [],
			lang_id: 0,
			username: 'Eli Fuik',
			rolename: 'super administrator'
		}
	}
}
