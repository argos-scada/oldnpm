const storeScripts = {
	state: {},

	mutations: {},

	actions: {
		searchScripts({ dispatch }, payload) {
			return dispatch('requestGet', `/scripts/search`);
		},
		runScript({ dispatch }, xid) {
			let url = `/scripts/execute/${xid}`;
			return dispatch('requestPost', { url });
		},
		async validateXid({ dispatch }, payload) {
			let url = `/scripts/validateXid`;
			return dispatch('requestPost', {
				url,
				data: {
					id: payload.id,
					userId: payload.userId,
					xid: payload.xid,
					name: payload.name,
					script: payload.script,
					pointsOnContext: payload.pointsOnContext,
					datapointContext: payload.datapointContext,
					datasourceContext: payload.datasourceContext,
				},
			});
		},

		async createScript({ dispatch }, payload) {
			let url = `/scripts/save`;
			return dispatch('requestPost', {
				url,
				data: {
					id: payload.id,
					userId: payload.userId,
					xid: payload.xid,
					name: payload.name,
					script: payload.script,
					pointsOnContext: payload.pointsOnContext,
					datapointContext: payload.datapointContext,
					datasourceContext: payload.datasourceContext,
				},
			});
		},
		async updateScript({ dispatch }, payload) {
			let url = `/scripts/update`;
			return dispatch('requestPut', {
				url,
				data: {
					id: payload.id,
					userId: payload.userId,
					xid: payload.xid,
					name: payload.name,
					script: payload.script,
					pointsOnContext: payload.pointsOnContext,
					datapointContext: payload.datapointContext,
					datasourceContext: payload.datasourceContext,
				},
			});
		},
		deleteScript({ dispatch }, id) {
			let url = `/scripts/${id}`;
			return dispatch('requestDelete', url);
		},
		fetchScripts({ dispatch }, payload) {
			return dispatch('requestPost', {
				url: `/scripts/search`,
				data: payload,
			});
		},

		getScriptsUniqueXid({dispatch}) {
			return dispatch('requestGet', '/scripts/generateXid');
		}
	},
	getters: {},
};

export default storeScripts;
