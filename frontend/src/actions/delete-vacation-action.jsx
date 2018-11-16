import {dispatcher} from '../util/mini-flux'

export default function deleteVacation(ev) {
    dispatcher.dispatch({
        type: "vacationDeleted",
    });
}
