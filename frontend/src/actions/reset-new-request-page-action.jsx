import {dispatcher} from '../util/mini-flux'

export default function resetNewRequestPage() {

    dispatcher.dispatch({
        type: "newRequestPageResetted",
    });
}
