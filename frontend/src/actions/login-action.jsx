import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import loadVacation from "./load-vacation-action";
import loadHolidays from "./load-holidays-action";

export default function login(userName, password) {
    xhr({
        uri: Config.apiBaseUrl + '/api/login',
        method: 'POST',
        body: {"userName": userName, "password": password},
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, body) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "authenticationFailed",
            });
        }
        else {
            dispatcher.dispatch({
                type: "authenticationSucceeded",
                user: body
            });
            loadVacation();
            loadHolidays();
        }
    });
}
