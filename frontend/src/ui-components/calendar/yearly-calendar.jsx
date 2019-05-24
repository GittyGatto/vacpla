import {Calendar} from "react-yearly-calendar";
import React from "react";
import './calendar-style.css';
import changedCalender from "../../actions/change-calendar-action";
import moment from 'moment';
import clearMessage from "../../actions/clear-message-action";

export class YearlyCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: undefined,
            customClasses: undefined,
            selectRange: false,
            selectedRange: [],
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange(ev) {
        const {year, customCssClasses, selectRange} = ev.vacation;
        this.setState({
            year,
            customCssClasses,
            selectRange,
        });
    }

    render() {
        const {year, customCssClasses, selectRange, selectedRange} = this.props;

        return (<div id='calendar'>
                <Calendar year={year ? year : 1900}
                          customClasses={customCssClasses}
                          selectRange={selectRange}
                          selectedRange={selectedRange ? selectedRange : [moment(), moment()]}
                          onPickRange={(start, end) => this._rangePicked(start, end)}
                          onPickDate={date => this._datePicked(date)}
                          firstDayOfWeek={1}
                          showWeekSeparators={false}/>
            </div>
        );
    };

    _datePicked(date) {
        console.log(date)
    }

    _rangePicked(start, end) {
        const range = [start, end];
        changedCalender(range);
        clearMessage();
    }
}
