import '../../../styles/index.scss';
import React from 'react';
import './All-Requests.css'
import {ListGroup, ListGroupItem} from "react-bootstrap";

export class AllRequests extends React.Component {

    render() {
        const {requests} = this.props;
        let allRequests = requests.map((curr, index) => {

            let status = curr.vacationRequestStatus;
            let requested = curr.requested;
            let statusAndRequested = status + " on " + requested;

            let buttonStyle = this._getButtonStyle(curr.vacationRequestStatus);

            return (<span className='OpenRequest' key={index}>
                <ListGroupItem bsStyle={buttonStyle}>{statusAndRequested} Days: {curr.vacations.length}</ListGroupItem>
                </span>);
        });

        return (<div className='OpenRequests'>
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
