import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import appStore from "../stores/app-store";

export default function loadOpenRequests() {

    const userName = appStore.getUser().userName;

    xhr({
        uri: Config.apiBaseUrl + '/api/openRequests',
        method: 'POST',
        body: {"userName": userName},
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, result) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "loadOpenRequestsFailed",
            });
        }
        else {
            dispatcher.dispatch({
                type: "loadOpenRequestsSucceeded",
                data: result
            });
        }
    });
}
