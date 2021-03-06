import xhr from 'xhr';
import {dispatcher} from '../util/mini-flux'
import Config from '../config';
import loadVacation from "./load-vacation-action";
import appStore from "../stores/app-store";
import newRequestStore from "../stores/newRequest-store";
import datesBetween from 'dates-between';
import {calculateVacationDays} from "../services/vacation-service";
import {appHistory} from "../ui-components/app-history";



export default function sendRequest() {
    const userName = appStore.getUser().userName;
    const range = newRequestStore.data.requestedVacations.range;
    const vacDays = Array.from(datesBetween(new Date(range[0]), new Date(range[1])));
    const vacationDays = calculateVacationDays(vacDays);
    const uuid = newRequestStore.data.requestedVacations.uuid;

    xhr({
        uri: Config.apiBaseUrl + '/api/vacationRequest',
        method: 'POST',
        body: {"userName": userName, "range": range, "vacationDays": vacationDays, "uuid": uuid},
        json: true,
        headers: {
            "X-User": userName,
        }
    }, function (err, resp, body) {
        if (resp && resp.statusCode === 403) {
            dispatcher.dispatch({
                type: "requestVacationFailed",
            });
        } else {
            dispatcher.dispatch({
                type: "requestVacationSucceeded",
                user: body
            });
            loadVacation();
            appHistory.push('/');
        }
    });
}
