import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import './dashboard-page.css';
import {ActionBar} from "../action-bar/action-bar";
import {YearlyCalendar} from "../calendar/yearly-calendar";
import loadVacation from "../../actions/load-vacation-action";
import loadHolidays from "../../actions/load-holidays-action";


export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getUser: props.getUser,
            annualLeave: undefined,
            vacationLeftCount: undefined,
            openRequestDaysCount: undefined,
            requests: [],
            year: undefined,
            customCssClasses: undefined,
        };
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
        loadVacation();
        loadHolidays();
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _onChange(ev) {
        const {getUser} = ev;
        const {annualLeave, vacationLeftCount, openRequestDaysCount, requests, year, customCssClasses} = ev.vacation;
        this.setState({
            getUser,
            annualLeave,
            vacationLeftCount,
            openRequestDaysCount,
            requests,
            year,
            customCssClasses
        });
    }

    render() {
        const {vacationLeftCount, year, customCssClasses} = this.state;

        return <div className='DashboardPage'>

            <ActionBar/>

            <div className='DashboardPage__Title'>
                <h2>Dashboard {year}</h2>
            </div>

            <div className="DashboardPage__Information_container">
                <h1>{vacationLeftCount ? vacationLeftCount : '...'}</h1>
                <h3 className="DashboardPage__Information_container_item">Days Left</h3>
            </div>

            <div className='DashboardPage__Calendar'>
                <YearlyCalendar year={year}
                                selectRange={false}
                                customCssClasses={customCssClasses}/>
            </div>

        </div>;
    }

    datePicked(date) {
    }
}
