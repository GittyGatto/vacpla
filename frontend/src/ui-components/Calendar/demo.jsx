import React from 'react';
import moment from 'moment';
import {Calendar, CalendarControls} from 'react-yearly-calendar';
import safeEval from 'notevil';
import './calendar-style.css';
import {dispatcher} from "../../util/mini-flux";
import {setSidebarOpen} from "../../actions/show-sidebar-action";

export class Demo extends React.Component {
    constructor(props) {
        super(props);
        const today = moment();
        const customCSSclasses = {
            holidays: ['2018-04-25', '2018-05-01', '2018-06-02', '2018-08-15', '2018-11-01'],
            spring: {
                start: '2018-03-21',
                end: '2018-6-20'
            },
            summer: {
                start: '2018-06-21',
                end: '2018-09-22'
            },
            autumn: {
                start: '2018-09-23',
                end: '2018-12-21'
            },
            weekend: 'Sat,Sun',
            winter: day => day.isBefore(moment([2018, 2, 21])) || day.isAfter(moment([2018, 11, 21]))
        };

        this.state = {
            year: undefined,
            selectedDay: today,
            selectedRange: [today, moment(today).add(15, 'day')],
            showDaysOfWeek: true,
            showTodayBtn: true,
            showWeekSeparators: true,
            selectRange: false,
            firstDayOfWeek: 0, // sunday
            customCSSclasses


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
        const {year, firstDayOfWeek, customCssClasses} = ev.vacation;
        this.setState({
            year,
            firstDayOfWeek,
            customCssClasses
        });
    }

    onPrevYear() {
        this.setState(prevState => ({
            year: prevState.year - 1
        }));
    }

    onNextYear() {
        this.setState(prevState => ({
            year: prevState.year + 1
        }));
    }

    goToToday() {
        const today = moment();

        this.setState({
            selectedDay: today,
            selectedRange: [today, moment(today).add(15, 'day')],
            year: today.year()
        });
    }

    datePicked(date) {
        this.setState({
            selectedDay: date,
            selectedRange: [date, moment(date).add(15, 'day')]
        });
    }

    rangePicked(start, end) {
        this.setState({
            selectedRange: [start, end],
            selectedDay: start
        });
    }

    toggleShowDaysOfWeek() {
        this.setState(prevState => ({
            showDaysOfWeek: !prevState.showDaysOfWeek
        }));
    }

    toggleForceFullWeeks() {
        this.setState(prevState => ({
            showDaysOfWeek: true,
            forceFullWeeks: !prevState.forceFullWeeks
        }));
    }

    toggleShowTodayBtn() {
        this.setState(prevState => ({
            showTodayBtn: !prevState.showTodayBtn
        }));
    }

    toggleShowWeekSeparators() {
        this.setState(prevState => ({
            showWeekSeparators: !prevState.showWeekSeparators
        }));
    }

    toggleSelectRange() {
        this.setState(prevState => ({
            selectRange: !prevState.selectRange
        }));
    }

    selectFirstDayOfWeek(event) {
        this.setState({
            firstDayOfWeek: parseInt(event.target.value, 10)
        });
    }

    updateClasses() {
        const { customCSSclasses } = this.state;
        const input = this.customClassesInput.value;
        const context = { customCSSclasses, moment };

        try {
            safeEval(input, context);

            const nextCustomCSSclasses = context.customCSSclasses;
            this.setState({
                customCSSclasses: nextCustomCSSclasses,
                customClassesError: false
            });
        } catch (e) {
            this.setState({
                customClassesError: true
            });
            throw e;
        }
    }

    render() {
        const {
            year,
            showTodayBtn,
            selectedDay,
            showDaysOfWeek,
            forceFullWeeks,
            showWeekSeparators,
            firstDayOfWeek,
            selectRange,
            selectedRange,
            customCSSclasses
        } = this.state;

        return (
            <div>
                <div id="calendar">
                    <CalendarControls
                        year={year}
                        showTodayButton={showTodayBtn}
                        onPrevYear={() => this.onPrevYear()}
                        onNextYear={() => this.onNextYear()}
                        goToToday={() => this.goToToday()}
                    />
                    <Calendar
                        year={year}
                        selectedDay={selectedDay}
                        showDaysOfWeek={showDaysOfWeek}
                        forceFullWeeks={forceFullWeeks}
                        showWeekSeparators={showWeekSeparators}
                        firstDayOfWeek={firstDayOfWeek}
                        selectRange={selectRange}
                        selectedRange={selectedRange}
                        onPickDate={(date, classes) => this.datePicked(date, classes)}
                        onPickRange={(start, end) => this.rangePicked(start, end)}
                        customClasses={customCSSclasses}
                    />
                </div>
            </div>
        );
    }
}
