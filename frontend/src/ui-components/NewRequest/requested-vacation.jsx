import '../../../styles/index.scss';
import React from 'react';
import {Button} from "react-bootstrap";
import deleteVacation from "../../actions/delete-vacation-action";

export class RequestedVacation extends React.Component {
    render() {
        const {requestedVacations} = this.props;

        if (requestedVacations == undefined) {
            return null;
        }

        return (<ul>
            <li>{requestedVacations ? requestedVacations.days : 'n/a'} {requestedVacations.days === 1 ? 'day ' : 'days '}
                from: {requestedVacations.range ? requestedVacations.range[0] : 'n/a'} to: {requestedVacations.range ? requestedVacations.range[1] : 'n/a'}
                <Button bsStyle='danger' onClick={(ev) => this._onDeleteClicked(ev)}>Delete</Button>
            </li>
        </ul>);
    }

    _onDeleteClicked(ev) {
        deleteVacation()
    }
}
