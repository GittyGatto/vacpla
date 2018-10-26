import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import appStore from "../stores/app-store";

export default function loadVacation() {

    const userName = appStore.getUser().userName;

    xhr({
        uri: Config.apiBaseUrl + '/api/vacation',
        method: 'POST',
        body: {"userName": userName},
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, result) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "loadVacationFailed",
            });
        }
        else {
            dispatcher.dispatch({
                type: "loadVacationSucceeded",
                data: result
            });
        }
    });
}
