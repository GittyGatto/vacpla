import {dispatcher} from '../util/mini-flux';

export default function changeRole(role) {
    dispatcher.dispatch({type: 'roleChanged', data: {role}});
}
