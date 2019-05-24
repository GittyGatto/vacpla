import {dispatcher} from '../util/mini-flux'

export default function setMessage(text, error) {
    dispatcher.dispatch({
        type: "messageSet",
        data: {text, error}
    });
}
