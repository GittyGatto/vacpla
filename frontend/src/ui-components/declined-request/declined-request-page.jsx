import '../../../styles/index.scss';
import React from 'react';
import './declined-request-page.css';
import {Header} from "../header/header";
import {dispatcher} from "../../util/mini-flux";
import {setSidebarOpen} from "../../actions/show-sidebar-action";
import {StatusBar} from "../status-bar/status-bar";
import {AllRequests} from "../dashboard/all-requests";
import {ListGroupItem} from "react-bootstrap";

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
        setSidebarOpen(false);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _onChange(ev) {
        const {declinedRequests} = ev.vacation;
        this.setState({approvedRequests});
    }

    render() {
        const {declinedRequests} = this.state;

        return <div className='Declined_Request_Page'>

            <Header/>

            <StatusBar/>

            <div className='Declined_Request_Page_Title'>
                <h2>Declined Request</h2>
            </div>

            <div className='Declined_Request_Page_Requests'>
                <AllRequests requests={declinedRequests}
                             withdraw={false}/>
            </div>

        </div>;
    }
}
