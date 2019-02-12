import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import './dashboard-page.css';
import loadVacation from "../../actions/load-vacation-action";
import loadHolidays from "../../actions/load-holidays-action";
import {setSidebarOpen} from "../../actions/show-sidebar-action";
import {Header} from "../Header/Header";
import {StatusBar} from "../StatusBar/StatusBar";
import {YearlyCalendar} from "../Calendar/yearly-calendar";


export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getUser: props.getUser,
            totalVacation: undefined,
            vacationLeftCount: undefined,
            openRequestDaysCount: undefined,
            requests: [],
            year: undefined,
            firstDayOfWeek: undefined,
            customCssClasses: undefined,

        };
        loadVacation();
        loadHolidays();
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
        const {getUser} = ev;
        const {totalVacation, vacationLeftCount, openRequestDaysCount, requests, year, firstDayOfWeek, customCssClasses} = ev.vacation;
        this.setState({
            getUser,
            totalVacation,
            vacationLeftCount,
            openRequestDaysCount,
            requests,
            year,
            firstDayOfWeek,
            customCssClasses
        });
    }

    render() {
        const {vacationLeftCount, year, firstDayOfWeek, customCssClasses} = this.state;

        return <div className='DashboardPage'>

            <Header/>

            <StatusBar/>

            <div className='DashboardPage__title'>
                <h2>dashboard {year}</h2>
            </div>

            <div className='DashboardPage__information'>
                <h1>{vacationLeftCount ? vacationLeftCount : '...'}</h1>
                <h3>days left</h3>
            </div>

            <div className='DashboardPage__Calendar'>
                <YearlyCalendar year={year}
                                selectRange={false}
                                firstDayOfWeek={firstDayOfWeek}
                                customCssClasses={customCssClasses}/>
            </div>


        </div>;
    }

    datePicked(date) {

    }

    _doTest(year, firstDayOfWeek, customCssClasses) {
        if (customCssClasses === undefined) {
            console.log('un => ' + customCssClasses)
            return undefined;
        } else {
            console.log('def => ' + customCssClasses)

            return <div className='DashboardPage__Calendar'>
                <YearlyCalendar year={2019}
                                selectRange={false}
                                firstDayOfWeek={firstDayOfWeek}
                                customClasses={customCssClasses}/>
            </div>
        }
        return undefined;
    }
}
