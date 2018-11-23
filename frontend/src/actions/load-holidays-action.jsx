import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import appStore from "../stores/app-store";

export default function loadHolidays() {
    const userName = appStore.getUser().userName;
    xhr({
        uri: Config.apiBaseUrl + '/api/holiday',
        method: 'POST',
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, result) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "loadHolidaysFailed",
            });
        }
        else {
            dispatcher.dispatch({
                type: "loadHolidaysSucceeded",
                data: result
            });
        }
    });
}
