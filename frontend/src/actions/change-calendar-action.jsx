import {dispatcher} from '../util/mini-flux'

export default function changedCalender(range) {

    dispatcher.dispatch({
        type: "calendarChanged",
        data: {range}
    });
}
