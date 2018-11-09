import '../../../styles/index.scss';
import React from 'react';
import {Button} from "react-bootstrap";

export class OpenRequests extends React.Component {

    render() {
        const {openRequests} = this.props;
        let years = openRequests.map((curr, index) => {
            return (<span key={index}>
                 <Button>{curr.vacationRequestStatus} {curr.requested} {curr.vacations.lenght}</Button>
                </span>);
        });

        return (<div>
            {years}
        </div>);
    }
}
