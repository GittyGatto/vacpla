import '../../../styles/index.scss';
import React from 'react';
import {Button} from "react-bootstrap";

export class VacationYear extends React.Component {
    render() {

        const {vacationYears, vacationDays} = this.props;

        let years = vacationYears.map((year, index) => {
            return (<span key={index}>{year}</span>);
        });

        return (<div>

            <Button>{years} ({vacationDays.length})</Button>

        </div>);
    }
}
