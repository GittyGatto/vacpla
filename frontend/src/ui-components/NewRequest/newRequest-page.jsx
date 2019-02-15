import '../../../styles/index.scss';
import React from 'react';
import './newRequestPage.css';
import '../Calendar/calendar-style.css'
import {Header} from "../Header/Header";
import {dispatcher} from "../../util/mini-flux";
import addVacation from "../../actions/add-vacation-range-action";
import sendRequest from "../../actions/send-request-action";
import {setSidebarOpen} from "../../actions/show-sidebar-action";
import resetNewRequestPage from "../../actions/reset-new-request-page-action";
import {StatusBar} from "../StatusBar/StatusBar";
import moment from 'moment';
import {YearlyCalendar} from "../Calendar/yearly-calendar";
import {Button} from "react-bootstrap";

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
            customCssClasses: undefined,
            selectedRange: undefined,

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
        const {uuid, range, requestedDays, requestedVacations, selectedRange} = ev.newRequest;
        const {vacationLeftCount, year, customCssClasses, openRequestDaysCount} = ev.vacation;
        this.setState({
            getUser,
            uuid,
            range,
            requestedDays,
            vacationLeftCount,
            requestedVacations,
            year,
            customCssClasses,
            selectedRange,
            openRequestDaysCount,
        });
    }

    render() {
        const {getUser, date, minDate, range, requestedDays, vacationLeftCount, year, customCssClasses, selectedRange, openRequestDaysCount} = this.state;

        let vacation = undefined;
        let errorReason = '';

        if (selectedRange !== undefined) {
            let disabled = false;
            if (vacationLeftCount-openRequestDaysCount-requestedDays <= 0){
                disabled = true;
                errorReason = 'Not enough vacation left';
            }

            if (requestedDays === 0){
                disabled = true;
                errorReason = 'This is a public holiday';
            }

            if (moment(selectedRange[0]).diff(moment()) <= 0){
               disabled= true;
               errorReason = 'Start day is in the past or today';
            }

            vacation = <div className='NewRequestPage_DaysLeft'>
                <h1>{requestedDays}</h1>
                <h3>Days Requested</h3>
                <h3>{moment(selectedRange[0]).format('DD-MMM-YYYY')} <i className="fas fa-arrow-right"></i> {moment(selectedRange[1]).format('DD-MMM-YYYY')}</h3>
                <Button disabled={disabled} bsStyle="danger" onClick={(ev) => this._onSendClicked(ev)}>Send Request</Button>
                <span><h3 className='NewRequestPage_Error'>{errorReason}</h3></span>
            </div>
        }


        return <div className='NewRequestPage'>

            <Header/>

            <StatusBar/>

            <div className='NewRequestPage_Title'>
                <h2>New Request {year}</h2>
            </div>

            <div className='NewRequestPage_DaysLeft'>
                <h1>{vacationLeftCount ? vacationLeftCount : '...'}</h1>
                <h3>Days Left</h3>
            </div>

            <div className='NewRequestPage_Request'>
                {vacation}
            </div>

            <div className='NewRequestPage_Calendar'>
                <YearlyCalendar year={year ? year : 1900}
                                selectedRange={selectedRange ? [moment(selectedRange[0]), moment(selectedRange[1])] : [moment(), moment()]}
                                customCssClasses={customCssClasses}
                                selectRange={true}/>
            </div>

        </div>;
    }

    _onSendClicked(ev) {
        addVacation(ev);
        sendRequest(ev);
    }

    rangePicked(range, end) {
        console.log(range, end);
    }
}
