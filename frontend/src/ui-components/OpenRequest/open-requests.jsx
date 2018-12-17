import '../../../styles/index.scss';
import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Link} from "react-router-dom";

export class OpenRequests extends React.Component {

    render() {
        return (<div>
            {this._renderRequests()}
        </div>);
    }

    _renderRequests() {
        const {openRequests} = this.props;

        return (<ListGroup>
            {openRequests.length > 0 ? openRequests.map(this._renderRequest)
                : <ListGroupItem>No open request.</ListGroupItem>}
        </ListGroup>);
    }

    _renderRequest(request) {
        const vacationRequestStatus = request.vacationRequestStatus || '<no open requests>';
        const requested = request.requested;
        const count = request.vacations[0].vacationCount;
        const uuid = request.uuid;
        const owner = request.owner;

        return (<span key={uuid}><ListGroupItem>
            <p>{count} Days for {owner}</p>

            <Link to={'/ViewRequest/' + uuid}>{uuid}</Link>

        </ListGroupItem></span>);
    }
}
