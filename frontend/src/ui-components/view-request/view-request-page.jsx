import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from "../../util/mini-flux";
import loadRequest from "../../actions/load-request-action";
import './view-request-page.css';
import '../calendar/calendar-style.css';
import moment from 'moment';
import {StatusBar} from "../status-bar/status-bar";
import {AllRequests} from "../dashboard/all-requests";
import {YearlyCalendar} from "../calendar/yearly-calendar";


export class ViewRequestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uuid: undefined,
            viewRequest: {},
            holidays: [],
            approved: [],
            requested: [],
        };
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        const {uuid} = this.props.match.params;
        loadRequest(uuid);
    }

    _onChange(ev) {
        const {viewRequest, holidays, approved, requested} = ev.viewRequest;
        this.setState({viewRequest, holidays, approved, requested});
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    render() {
        const {viewRequest, holidays, approved, requested} = this.state;

        const today = moment();
        const year = today.year();
        const fromMoment = moment(viewRequest.vacations ? viewRequest.vacations[0].from : null);
        const toMoment = moment(viewRequest.vacations ? viewRequest.vacations[0].to : null);
        const selectedRange = [fromMoment, toMoment];
        const customCssClasses = {holidays: holidays, weekend: 'Sat,Sun', spring: approved, winter: requested};


        return (<div className='View_Request_Page'>

            <StatusBar/>

            <div className='View_Request_Page_Title'>
                <h2>Decide</h2>
            </div>

            <div className='View_Request_Page_Request'>
                {viewRequest.uuid ? <AllRequests requests={[viewRequest]} approvalMode={true}/> : null}
            </div>

            <div className='DashboardPage__Calendar'>
                <YearlyCalendar year={year}
                                selectRange={true}
                                selectedRange={selectedRange}
                                customCssClasses={customCssClasses}/>
            </div>

        </div>);
    }
}

