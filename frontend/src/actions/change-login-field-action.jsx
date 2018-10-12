import {dispatcher} from '../util/mini-flux'

export default function changeLoginField(field, value) {

	dispatcher.dispatch({
		type: "loginFieldChanged",
		data: {
			field, value
		}
	});
}
