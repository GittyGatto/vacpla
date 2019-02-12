import {Calendar} from "react-yearly-calendar";
import React from "react";
import './calendar-style.css';

export class YearlyCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: undefined,
            customClasses: undefined,
            selectRange: false,
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange(ev) {
        const {year, customCssClasses, selectRange} = ev.vacation;
        this.setState({
            year,
            customCssClasses,
            selectRange
        });
    }

    render() {
        const {year, customCssClasses, selectRange} = this.props;

        return (<div id='calendar'>
                <Calendar year={year ? year : 1900}
                          customClasses={customCssClasses}
                          selectRange={selectRange}
                          onPickRange={(start, end) => this._rangePicked(start, end)}
                          onPickDate={date => this._datePicked(date)}
                          firstDayOfWeek={1}
                          showWeekSeparators={false}/>
            </div>
        );
    };

    rangePicked(start, end) {
        console.log(start + end)
    }

    _datePicked(date) {
        console.log(date)
    }
}
