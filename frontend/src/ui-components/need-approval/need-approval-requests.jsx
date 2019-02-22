import '../../../styles/index.scss';
import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {Link} from "react-router-dom";

export class NeedApprovalRequests extends React.Component {

    render() {
        return (<div>
            {this._renderRequests()}
        </div>);
    }

    _renderRequests() {
        const {openRequests} = this.props;

        if (openRequests === undefined){
            return <ListGroupItem>No open request.</ListGroupItem>
        }

        return (<ListGroup>
            {openRequests.length > 0 ? openRequests.map(this._renderRequest)
                : <ListGroupItem>No open request.</ListGroupItem>}
        </ListGroup>);
    }

    _renderRequest(request) {
        const count = request.vacations[0].vacationCount;
        const uuid = request.uuid;
        const owner = request.owner;
        const requested = request.requested;

        return (<span key={uuid}><ListGroupItem>
            <p>{owner} requested {count} Days (request date: {requested})</p>

            <Link to={'/ViewRequest/' + uuid}>{uuid}</Link>

        </ListGroupItem></span>);
    }
}
