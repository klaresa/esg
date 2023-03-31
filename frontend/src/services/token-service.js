import api from '../config/api';

function getTokenHeaders() {
	const token = localStorage.getItem("token");
	const parsed = JSON.parse(token);

	if (parsed) {
		api.defaults.headers.Authorization = `Bearer ${(parsed.access_token)}`;
	}

	return {
		"headers": {
			"Authorization": `Bearer ${(parsed.access_token)}`,
		}
	};
}

function removeToken() {
	localStorage.removeItem("token");
	api.defaults.headers.Authorization = undefined;
}

function getTokenData() {
	const token = localStorage.getItem("token");
	const parsed = JSON.parse(token);

	if (parsed) {
		api.defaults.headers.Authorization = `Bearer ${(parsed.access_token)}`;
	}

	return parsed;
}

function setToken(name, data) {
	localStorage.setItem(name, data);
}

export {
	getTokenHeaders,
	removeToken,
	getTokenData,
	setToken
}
