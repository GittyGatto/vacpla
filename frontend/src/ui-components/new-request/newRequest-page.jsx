import '../../../styles/index.scss';
import React from 'react';
import './new-request-page.css';
import '../calendar/calendar-style.css'
import {dispatcher} from "../../util/mini-flux";
import addVacation from "../../actions/add-vacation-range-action";
import sendRequest from "../../actions/send-request-action";
import resetNewRequestPage from "../../actions/reset-new-request-page-action";
import {ActionBar} from "../action-bar/action-bar";
import moment from 'moment';
import {YearlyCalendar} from "../calendar/yearly-calendar";
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
            if (vacationLeftCount - openRequestDaysCount - requestedDays <= 0) {
                disabled = true;
                errorReason = 'Not enough vacation';
            }

            if (requestedDays === 0) {
                disabled = true;
                errorReason = 'This date is already requested, a public holiday, or on a weekend';
            }

            if (moment(selectedRange[0]).diff(moment()) <= 0) {
                disabled = true;
                errorReason = 'Start day is in the past or today';
            }

            vacation = <div className='NewRequestPage_Request'>
                <h1>{requestedDays}</h1>
                <h3>Days Requested</h3>
                <h3>{moment(selectedRange[0]).format('DD-MMM-YYYY')} <i
                    className="fas fa-arrow-right"></i> {moment(selectedRange[1]).format('DD-MMM-YYYY')}</h3>
                <Button disabled={disabled} onClick={(ev) => this._onSendClicked(ev)}>Request</Button>
                <span><p className='NewRequestPage_Error'>{errorReason}</p></span>
            </div>
        }


        return <div className='NewRequestPage'>

            <ActionBar/>

            <div className='NewRequestPage_Title'>
                <h2>New Request {year}</h2>
            </div>

            <div className="NewRequestPage_Request_container">
                <h1>{vacationLeftCount ? vacationLeftCount : '...'}</h1>
                <h3 className="NewRequestPage_Request_container_item">Days Left</h3>
            </div>

            {vacation}

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
