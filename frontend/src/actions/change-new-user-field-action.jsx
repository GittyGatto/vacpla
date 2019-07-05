import {dispatcher} from '../util/mini-flux'

export default function changeNewUserField(field, value) {

	dispatcher.dispatch({
		type: "newUserFieldChanged",
		data: {
			field, value
		}
	});
}
