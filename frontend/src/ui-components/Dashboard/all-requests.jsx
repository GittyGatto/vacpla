import '../../../styles/index.scss';
import React from 'react';
import {Jumbotron, ListGroup, Badge} from "react-bootstrap";
import './all-requests.css'

export class AllRequests extends React.Component {

    render() {
        const {requests} = this.props;
        let allRequests = requests.map((curr, index) => {

            let buttonStyle = this._getButtonStyle(curr.vacationRequestStatus);
            let badgeStyle = "DashboardPage_Request_Badge_" + this._getButtonStyle(curr.vacationRequestStatus);


            return (<span key={index}>
                        <Jumbotron className="DashboardPage_Request">
                          <p>
                             {curr.vacations[0].vacationCount} Days <Badge variant="warning">{curr.vacationRequestStatus}</Badge> on {curr.requested}
                          </p>
                          <p>
                             {curr.vacations[0].from} => {curr.vacations[0].to}
                          </p>
                        </Jumbotron>
                </span>);
        })
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
