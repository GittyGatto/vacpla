import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import {Button} from "react-bootstrap";

export class VacationYear extends React.Component {
    render() {

        const {vacationYears, vacationDays} = this.props;

        let years = vacationYears.map((year) => {
            return (<span>{year}</span>);
        });

        return (<div>

            <Button>{years} ({vacationDays.length})</Button>

        </div>);
    }
}
