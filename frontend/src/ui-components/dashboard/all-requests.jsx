import '../../../styles/index.scss';
import React from 'react';
import {Button, Jumbotron, ListGroup} from "react-bootstrap";
import './all-requests.css'
import withdrawRequest from "../../actions/withdraw-request-action";
import checkoutRequest from "../../actions/checkout-request-action";
import approveRequest from "../../actions/approve-request-action";
import declineRequest from "../../actions/decline-request-action";

export class AllRequests extends React.Component {

    render() {
        const {requests, withdraw, take, approvalMode} = this.props;
        let allRequests = requests.map((curr, index) => {
            return (<span key={index}>
                        <Jumbotron className="AllRequests_Request">

                            <div className="AllRequests_Request_container">
                                <h1>{curr.vacationCount}</h1>
                                <h3 className="AllRequests_Request_container_item">Days {take ? ' for ' + curr.owner : null} {approvalMode ? curr.owner : null}</h3>
                            </div>

                            <h3 className="AllRequests_Request_from-to">{curr.from} <i className="fas fa-arrow-right"></i> {curr.to}</h3>
                            {withdraw ? <Button onClick={() => this._onWithdrawClicked(curr.uuid)}
                                                bsStyle="warning">Withdraw</Button> : null}
                            {take ? <Button onClick={() => this._onCheckoutClicked(curr.uuid)}
                                            bsStyle="warning">Checkout</Button> : null}
                            {approvalMode ? <Button onClick={() => this._onApproveClicked(curr.uuid)}
                                                    bsStyle="danger">Decline</Button> : null}
                            {approvalMode ? <Button onClick={() => this._onDeclineClicked(curr.uuid)}
                                                    bsStyle="success">Approve</Button> : null}
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

    _onApproveClicked(requestUuid) {
        approveRequest(requestUuid);
    }

    _onDeclineClicked(requestUuid) {
        declineRequest(requestUuid);
    }
}
