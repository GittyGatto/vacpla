import {dispatcher} from '../util/mini-flux'

export default function addVacation(ev) {
    dispatcher.dispatch({
        type: "vacationAdded",
    });
}
