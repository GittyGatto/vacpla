import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import appStore from "../stores/app-store";
import loadVacation from "./load-vacation-action";


export default function withdrawRequest(uuid) {
    const userName = appStore.getUser().userName;

    xhr({
        uri: Config.apiBaseUrl + '/api/requestStatusChange',
        method: 'POST',
        body: {"userName": userName, "uuid": uuid, "status": 'WITHDRAW'},
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, body) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "withdrawRequestFailed",
            });
        } else {
            dispatcher.dispatch({
                type: "withdrawRequestSucceeded",
                user: body
            })
            loadVacation();
        }
    });
}
