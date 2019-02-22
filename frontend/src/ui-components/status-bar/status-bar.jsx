import React from 'react';
import './status-bar.css';
import {Link} from "react-router-dom";
import {dispatcher} from "../../util/mini-flux";
import {setSidebarOpen} from "../../actions/show-sidebar-action";
import logout from "../../actions/logout-action";

export class StatusBar extends React.Component {
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
        setSidebarOpen(false);
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

        return <div className='container'>

            <Link to="/">
                <div className='StatusBar__item'>
                    <i className="fas fa-tachometer-alt"></i>
                    <p>Dashboard</p>
                </div>
            </Link>

            <Link to="/NewRequest">
                <div className='StatusBar__item'>
                    <i className="fas fa-cart-plus"></i>
                    <p>New</p>
                </div>
            </Link>

            <Link to="/OpenRequest">
                <div className='StatusBar__item'>
                    <i className="fas fa-envelope-open"></i>
                    <p>Open ({openRequests ? openRequests.length : '0'})</p>
                </div>
            </Link>

            <Link to="/ApprovedRequest">
                <div className='StatusBar__item'>
                    <i className="fas fa-thumbs-up"></i>
                    <p>Approved ({approvedRequests ? approvedRequests.length : '0'})</p>
                </div>
            </Link>

            <Link to="/DeclinedRequest">
                <div className='StatusBar__item'>
                    <i className="fas fa-thumbs-down"></i>
                    <p>Declined ({declinedRequests ? declinedRequests.length : '0'})</p>
                </div>
            </Link>

            <Link to="/NeedApproval">
                <div className='StatusBar__item'>
                    <i className="fas fa-glasses"></i>
                    <p>Need Approval ({openUserRequests ? openUserRequests.length : '0'})</p>
                </div>
            </Link>

            <div className='StatusBar__item' onClick={() => logout()}>
                <i className="fas fa-sign-out-alt"></i>
                <p>Go Away!</p>
            </div>

        </div>;
    }
}
