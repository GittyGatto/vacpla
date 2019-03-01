import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import {appHistory} from "../ui-components/app-history";
import appStore from "../stores/app-store";
import loadOpenRequests from "./load-open-requests-action";


export default function declineRequest(uuid) {
    const userName = appStore.getUser().userName;

    xhr({
        uri: Config.apiBaseUrl + '/api/requestStatusChange',
        method: 'POST',
        body: {"userName": userName, "uuid": uuid, "status": 'NOT_APPROVED'},
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, body) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "decline1RequestFailed",
            });
        } else {
            dispatcher.dispatch({
                type: "declineRequestSucceeded",
                user: body
            })
            loadOpenRequests();
            appHistory.push('/NeedApproval');
        }
    });
}
