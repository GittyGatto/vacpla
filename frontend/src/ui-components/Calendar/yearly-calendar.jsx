import {Calendar} from "react-yearly-calendar";
import React from "react";
import './calendar-style.css';

export class YearlyCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: undefined,
            firstDayOfWeek: 1,
            customClasses: undefined,
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange(ev) {
        const {year, firstDayOfWeek, customCssClasses} = ev.vacation;
        this.setState({
            year,
            firstDayOfWeek,
            customCssClasses
        });
    }

    render() {
        const {year, firstDayOfWeek, customCssClasses} = this.props;

        return (<Calendar year={year}
                          selectRange={false}
                          onPickRange={(start, end) => this.rangePicked(start, end)}
                          onPickDate={date => this.datePicked(date)}
                          firstDayOfWeek={firstDayOfWeek}
                          customClasses={customCssClasses}
                          showWeekSeparators={false}
            />
        );
    };

}