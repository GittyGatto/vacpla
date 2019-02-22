import '../../../styles/index.scss';
import React from 'react';
import {Button, Jumbotron, ListGroup} from "react-bootstrap";
import './all-requests.css'
import withdrawRequest from "../../actions/withdraw-request-action";
import checkoutRequest from "../../actions/checkout-request-action";

export class AllRequests extends React.Component {

    render() {
        const {requests, withdraw, take} = this.props;
        let allRequests = requests.map((curr, index) => {
            return (<span key={index}>
                        <Jumbotron className="DashboardPage_Request">
                            <h1>{curr.vacations[0].vacationCount}</h1>
                            <h3>Days {take ? ' for ' + curr.owner : null}</h3>
                            <h3>{curr.vacations[0].from} <i className="fas fa-arrow-right"></i> {curr.vacations[0].to}</h3>
                            {withdraw ? <Button onClick={() => this._onWithdrawClicked(curr.uuid)} bsStyle="warning">Withdraw</Button> : null}
                            {take ? <Button onClick={() => this._onCheckoutClicked(curr.uuid)} bsStyle="warning">Checkout</Button> : null}
                        </Jumbotron>
                </span>);
        })
        return (<div>
            <ListGroup>
                {allRequests}
            </ListGroup>
        </div>);
    }

    _onWithdrawClicked(requestUuid) {
        withdrawRequest(requestUuid);
    }

    _onCheckoutClicked(requestUuid) {
        checkoutRequest(requestUuid);
    }
}
