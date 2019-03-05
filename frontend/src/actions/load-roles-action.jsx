import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import appStore from "../stores/app-store";

export default function loadRoles() {
    const userName = appStore.getUser().userName;
    xhr({
        uri: Config.apiBaseUrl + '/api/roles',
        method: 'POST',
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, result) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "loadRolesFailed",
            });
        } else {
            dispatcher.dispatch({
                type: "loadRolesSucceeded",
                data: result
            });
        }
    });
}
