import '../../../styles/index.scss';
import React from 'react';
import {ListGroup, ListGroupItem} from "react-bootstrap";

export class OpenRequests extends React.Component {

    render() {
        const {openRequests} = this.props;
        let resultList = openRequests.map((curr, index) => {
            let buttonStyle = this._getButtonStyle(curr.vacationRequestStatus);
            return (<span key={index}>
                <ListGroupItem bsStyle={buttonStyle}> {curr.vacationRequestStatus} on {curr.requested} Days: {curr.vacations[0].vacationCount}</ListGroupItem>
                </span>);
        });

        return (<div>
            <ListGroup>
                {resultList}
            </ListGroup>
        </div>);
    }

    _getButtonStyle(status) {
        if (status === 'REQUESTED') {
            return "warning";
        }
    }
}
