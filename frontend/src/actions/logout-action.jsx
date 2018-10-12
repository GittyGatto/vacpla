import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import appStore from '../stores/app-store';

export default function logout() {
	const userName = appStore.getUser().userName;
	xhr({
		uri: Config.apiBaseUrl + '/api/logout',
		method: 'POST',
		body: {"userName": userName},
		json: true,
		headers: {
			"X-User": userName
		}
	}, function () {
		dispatcher.dispatch({
			type: "logoutSucceeded",
			role: undefined
		})
	})
};

