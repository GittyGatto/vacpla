import '../../../styles/index.scss';
import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";

export class AllRequests extends React.Component {

    render() {
        const {requests} = this.props;
        let allRequests = requests.map((curr, index) => {

            let buttonStyle = this._getButtonStyle(curr.vacationRequestStatus);

            return (<span key={index}>
                <ListGroupItem bsStyle={buttonStyle}> {curr.vacationRequestStatus} on {curr.requested} Days: {curr.vacations[0].vacationCount}</ListGroupItem>
                </span>);
        });

        return (<div>
            <ListGroup>
                {allRequests}
            </ListGroup>
        </div>);
    }

    _getButtonStyle(status) {
        if (status === 'REQUESTED') {
            return "warning";
        }
        if (status === 'APPROVED') {
            return "success";
        }
        if (status === 'NOT_APPROVED') {
            return "danger";
        }
    }
}
