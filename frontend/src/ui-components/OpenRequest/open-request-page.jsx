import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import './open-request-page.css';
import {Header} from "../Header/Header";
import loadOpenRequests from "../../actions/load-open-requests-action";
import {OpenRequests} from "./open-requests";
import {setSidebarOpen} from "../../actions/show-sidebar-action";

export class OpenRequestPage extends React.Component {
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
        return <div className='OpenRequestPage'>
            <Header/>
            <h1>Open requests</h1>
            <OpenRequests openRequests={openRequests}/>
        </div>;
    }
}
