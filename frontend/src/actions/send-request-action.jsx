import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import loadVacation from "./load-vacation-action";
import appStore from "../stores/app-store";
import newRequestStore from "../stores/newRequest-store";

export default function sendRequest() {
    const userName = appStore.getUser().userName;
    const range = newRequestStore.data.requestedVacations.range;
    xhr({
        uri: Config.apiBaseUrl + '/api/vacationRequest',
        method: 'POST',
        body: {"userName": userName, "range": range},
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, body) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "requestVacationFailed",
            });
        }
        else {
            dispatcher.dispatch({
                type: "requestVacationSucceeded",
                user: body
            });
            loadVacation();
        }
    });
}
