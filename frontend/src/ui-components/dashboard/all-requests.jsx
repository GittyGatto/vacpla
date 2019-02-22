import '../../../styles/index.scss';
import React from 'react';
import {Button, Jumbotron, ListGroup} from "react-bootstrap";
import './all-requests.css'
import withdrawRequest from "../../actions/withdraw-request-action";

export class AllRequests extends React.Component {

    render() {
        const {requests, withdraw} = this.props;
        let allRequests = requests.map((curr, index) => {
            return (<span key={index}>
                        <Jumbotron className="DashboardPage_Request">
                            <h1>{curr.vacations[0].vacationCount}</h1>
                            <h3>Days</h3>
                            <h3>{curr.vacations[0].from} <i className="fas fa-arrow-right"></i> {curr.vacations[0].to}</h3>
                            {withdraw ? <Button onClick={() => this._onWithdrawClicked(curr.uuid)} bsStyle="warning">Withdraw</Button> : null}
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

    _onWithdrawClicked(requestUuid) {
        console.log(requestUuid);
        withdrawRequest(requestUuid);
    }
}
