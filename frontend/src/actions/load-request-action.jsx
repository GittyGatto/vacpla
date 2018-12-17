import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import appStore from "../stores/app-store";

export default function loadRequest(uuid) {

    const userName = appStore.getUser().userName;

    xhr({
        uri: Config.apiBaseUrl + '/api/viewRequest',
        method: 'POST',
        body: {"userName": userName, "requestUuid": uuid},
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, result) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "loadRequestFailed",
            });
        }
        else {
            dispatcher.dispatch({
                type: "loadRequestSucceeded",
                data: result
            });
        }
    });
}
