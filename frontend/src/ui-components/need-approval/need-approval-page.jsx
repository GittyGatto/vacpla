import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import './need-approval-page.css';
import {Header} from "../header/header";
import loadOpenRequests from "../../actions/load-open-requests-action";
import {NeedApprovalRequests} from "./need-approval-requests";
import {setSidebarOpen} from "../../actions/show-sidebar-action";

export class NeedApprovalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getUser: props.getUser,
            openRequests: [],
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
        const {getUser} = ev;
        const {openRequests} = ev.openRequests;
        this.setState({getUser, openRequests});
    }

    render() {
        const {openRequests} = this.state;
        return <div className='Need_Approval_Page'>
            <Header/>
            <h1>Open requests</h1>
            <NeedApprovalRequests openRequests={openRequests}/>
        </div>;
    }
}
