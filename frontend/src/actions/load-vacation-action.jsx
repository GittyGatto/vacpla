import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';

export default function loadVacation(userName) {

    xhr({
        uri: Config.apiBaseUrl + '/api/vacation',
        method: 'POST',
        body: {"userName": userName},
        json: true,
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
