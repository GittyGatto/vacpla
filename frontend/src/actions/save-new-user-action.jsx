import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import {appHistory} from "../ui-components/app-history";
import loadOpenRequests from "./load-open-requests-action";
import newUserStore from "../stores/new-user-store";
import appStore from "../stores/app-store";


export default function saveNewUser() {

    const userName = appStore.getUser().userName;
    const {newUserName, newPassword, entry, role, initLeave} = newUserStore.data;
    const entryDate = new Date(entry);

    xhr({
        uri: Config.apiBaseUrl + '/api/register',
        method: 'POST',
        body: {
            "userName": newUserName,
            "password": newPassword,
            "entry": entryDate.toLocaleDateString(),
            "role": role,
            "initLeave": initLeave,
        },
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
            });
            appHistory.push('/UserManagement');
        }
    });
}