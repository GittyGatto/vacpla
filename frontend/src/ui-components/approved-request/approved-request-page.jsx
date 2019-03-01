import '../../../styles/index.scss';
import React from 'react';
import './approved-request-page.css';
import {dispatcher} from "../../util/mini-flux";
import {StatusBar} from "../status-bar/status-bar";
import {AllRequests} from "../dashboard/all-requests";

export class ApprovedRequestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            approvedRequests: [],
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
        const {approvedRequests} = ev.vacation;
        this.setState({approvedRequests});
    }

    render() {
        const {approvedRequests} = this.state;

        return <div className='Approved_Request_Page'>

            <StatusBar/>

            <div className='Approved_Request_Page_Title'>
                <h2>Approved Request</h2>
            </div>

            <div className='Approved_Request_Page_Requests'>
                <AllRequests requests={approvedRequests}
                             withdraw={false}/>
            </div>

        </div>;
    }
}
