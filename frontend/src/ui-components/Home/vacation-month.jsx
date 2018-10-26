import '../../../styles/index.scss';
import React from 'react';

export class VacationMonth extends React.Component {
    render() {

        const {vacationDays} = this.props;
        const allmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        const fufu = allmonths.map((x, index) => {
            return (<div key={index}>{x}</div>)
        });


        return (<div>

            {fufu}


        </div>);
    }
}
