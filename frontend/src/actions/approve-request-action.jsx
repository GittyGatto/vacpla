import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import {appHistory} from "../ui-components/appHistory";
import appStore from "../stores/app-store";
import loadOpenRequests from "./load-open-requests-action";


export default function approveRequest(uuid) {
    const userName = appStore.getUser().userName;

    xhr({
        uri: Config.apiBaseUrl + '/api/requestStatusChange',
        method: 'POST',
        body: {"userName": userName, "uuid": uuid, "status": 'APPROVED'},
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, body) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "approveRequestFailed",
            });
        } else {
            dispatcher.dispatch({
                type: "approveRequestSucceeded",
                user: body
            })
            loadOpenRequests();
            appHistory.push('/OpenRequest');
        }
    });
}
