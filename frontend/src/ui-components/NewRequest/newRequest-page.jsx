import '../../../styles/index.scss';
import React from 'react';
import './newRequestPage.css';
import '../Calendar/calendar-style.css'
import {Header} from "../Header/Header";
import {dispatcher} from "../../util/mini-flux";
import changedCalender from "../../actions/change-calendar-action";
import addVacation from "../../actions/add-vacation-range-action";
import sendRequest from "../../actions/send-request-action";
import {setSidebarOpen} from "../../actions/show-sidebar-action";
import resetNewRequestPage from "../../actions/reset-new-request-page-action";
import {StatusBar} from "../StatusBar/StatusBar";
import {Calendar} from "react-yearly-calendar";
import moment from 'moment';

export class NewRequestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uuid: undefined,
            range: [],
            requestedDays: undefined,
            date: [new Date(), new Date()],
            minDate: new Date(),
            getUser: props.getUser,
            vacationLeftCount: undefined,
            requestedVacations: undefined,

        };
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
        setSidebarOpen(false);
        resetNewRequestPage();
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _onChange(ev) {
        const {getUser} = ev;
        const {uuid, range, requestedDays, requestedVacations} = ev.newRequest;
        const {vacationLeftCount} = ev.vacation;
        this.setState({getUser, uuid, range, requestedDays, vacationLeftCount, requestedVacations});
    }

    render() {
        const {getUser, date, minDate, range, requestedDays, vacationLeftCount} = this.state;
        const year = new Date().getFullYear();
        const today = moment();
        const selectedRange = [today, moment(today).add(15, 'day')];

        return <div className='NewRequestPage'>

            <Header/>

            <StatusBar/>

            <div className='NewRequestPage_Requests'>
                <h2>new request</h2>
            </div>

            <div className='NewRequestPage_Calendar'>
                <Calendar year={year}
                          selectedRange={selectedRange}
                          selectRange={true}
                          onPickRange={(start, end) => this.rangePicked(start, end)}
                          firstDayOfWeek={1}/>
            </div>

        </div>;
    }

    _onCalendarChanged(ev) {
        changedCalender(ev);
    }

    _onSendClicked(ev) {
        addVacation(ev);
        sendRequest(ev);
    }

    rangePicked(range, end) {
        console.log(range, end);
    }
}
