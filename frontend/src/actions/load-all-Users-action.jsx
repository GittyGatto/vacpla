import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import appStore from "../stores/app-store";

export default function loadAllUsers() {
    const userName = appStore.getUser().userName;
    xhr({
        uri: Config.apiBaseUrl + '/api/users',
        method: 'POST',
        body: {"userName": userName},
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, result) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "loadAllUsersFailed",
            });
        }
        else {
            dispatcher.dispatch({
                type: "loadAllUsersSucceeded",
                data: result
            });
        }
    });
}
