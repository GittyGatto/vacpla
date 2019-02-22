import '../../../styles/index.scss';
import React from 'react';
import './open-request-page.css';
import {Header} from "../header/header";
import {dispatcher} from "../../util/mini-flux";
import {setSidebarOpen} from "../../actions/show-sidebar-action";
import {StatusBar} from "../status-bar/status-bar";
import {AllRequests} from "../dashboard/all-requests";

export class OpenRequestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openRequests: [],
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
        const {openRequests} = ev.vacation;
        this.setState({openRequests});
    }

    render() {
        const {openRequests} = this.state;

        return <div className='Open_Request_Page'>

            <Header/>

            <StatusBar/>

            <div className='Open_Request_Page_Title'>
                <h2>Open Request</h2>
            </div>

            <div className='Open_Request_Page_Requests'>
                <AllRequests requests={openRequests}/>
            </div>

        </div>;
    }
}
