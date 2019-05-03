import '../../../styles/index.scss';
import React from 'react';
import './declined-request-page.css';
import {dispatcher} from "../../util/mini-flux";
import {ActionBar} from "../action-bar/action-bar";
import {AllRequests} from "../dashboard/all-requests";

export class DeclinedRequestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            declinedRequests: [],
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
        const {declinedRequests} = ev.vacation;
        this.setState({declinedRequests});
    }

    render() {
        const {declinedRequests} = this.state;

        return <div className='Declined_Request_Page'>

            <ActionBar/>

            <div className='Declined_Request_Page_Title'>
                <h2>Declined Request</h2>
            </div>

            <div className='Declined_Request_Page_Requests'>
                {declinedRequests.length ? <AllRequests requests={declinedRequests}/> : <p>no declined requests</p>}
            </div>

        </div>;
    }
}
