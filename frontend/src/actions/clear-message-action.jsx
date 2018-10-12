import {dispatcher} from '../util/mini-flux'

export default function clearMessage() {
	dispatcher.dispatch({
		type: "clearMessage"
	})
}
