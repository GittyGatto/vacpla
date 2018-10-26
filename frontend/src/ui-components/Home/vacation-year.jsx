import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../../util/mini-flux';

export class VacationYear extends React.Component {
    render() {

        const {vacationYears} = this.props;

        let years = vacationYears.map((year) => {
            return (<span>{year}</span>);
        });

        return (<div>

            {years}

        </div>);
    }
}
