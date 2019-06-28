import React from 'react';
import './action-bar.css';
import {Link} from "react-router-dom";
import {dispatcher} from "../../util/mini-flux";
import logout from "../../actions/logout-action";
import appStore from "../../stores/app-store";

export class ActionBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openRequests: [],
            approvedRequests: [],
            declinedRequests: [],
            openUserRequests: [],
        };
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _onChange(ev) {
        const {openRequests, approvedRequests, declinedRequests} = ev.vacation;
        const {openUserRequests} = ev.openUserRequests;
        this.setState({openRequests, approvedRequests, declinedRequests, openUserRequests});
    }

    render() {
        const {openRequests, approvedRequests, declinedRequests, openUserRequests} = this.state;
        const userRole = appStore.getUser().role;


        return <div className='container'>

            <Link to="/">
                <div className='Action_Bar__item'>
                    <i className="fas fa-tachometer-alt"></i>
                    <p>Dashboard</p>
                </div>
            </Link>

            <Link to="/NewRequest">
                <div className='Action_Bar__item'>
                    <i className="fas fa-cart-plus"></i>
                    <p>New</p>
                </div>
            </Link>

            <Link to="/OpenRequest">
                <div className='Action_Bar__item'>
                    <i className="fas fa-envelope-open"></i>
                    <p>Open ({openRequests ? openRequests.length : '0'})</p>
                </div>
            </Link>

            <Link to="/ApprovedRequest">
                <div className='Action_Bar__item'>
                    <i className="fas fa-thumbs-up"></i>
                    <p>Approved ({approvedRequests ? approvedRequests.length : '0'})</p>
                </div>
            </Link>

            <Link to="/DeclinedRequest">
                <div className='Action_Bar__item'>
                    <i className="fas fa-thumbs-down"></i>
                    <p>Declined ({declinedRequests ? declinedRequests.length : '0'})</p>
                </div>
            </Link>

            {userRole !== 'ADMIN' ? null :
                <Link to="/NeedApproval">
                    <div className='Action_Bar__item'>
                        <i className="fas fa-glasses"></i>
                        <p>Need Approval ({openUserRequests ? openUserRequests.length : '0'})</p>
                    </div>
                </Link>}

            {userRole !== 'ADMIN' ? null :
                <Link to="/UserManagement">
                    <div className='Action_Bar__item'>
                        <i className="fas fa-users"></i>
                        <p>User Management</p>
                    </div>
                </Link>}

            <div className='Action_Bar__item' onClick={() => logout()}>
                <i className="fas fa-sign-out-alt"></i>
                <p>Go Away!</p>
            </div>
        </div>;
    }
}
