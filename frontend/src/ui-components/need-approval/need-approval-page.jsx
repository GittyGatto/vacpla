import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import './need-approval-page.css';
import '../dashboard/all-requests.css'
import {Header} from "../header/header";
import loadOpenRequests from "../../actions/load-open-requests-action";
import {setSidebarOpen} from "../../actions/show-sidebar-action";
import {StatusBar} from "../status-bar/status-bar";
import {AllRequests} from "../dashboard/all-requests";

export class NeedApprovalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openUserRequests: [],
        };
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
        loadOpenRequests();
        setSidebarOpen(false);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _onChange(ev) {
        const {openUserRequests} = ev.openUserRequests;
        this.setState({openUserRequests});
    }

    render() {
        const {openUserRequests} = this.state;

        return <div className='Need_Approval_Page'>

            <Header/>

            <StatusBar/>

            <div className='Need_Approval_Page_Title'>
                <h2>Need approval</h2>
            </div>

            <div className='Need_Approval_Page'>
                {openUserRequests.length ? <AllRequests requests={openUserRequests} take={true}/> :
                    <p>no request to approve</p>}
            </div>

        </div>;
    }
}
