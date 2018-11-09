import '../../../styles/index.scss';
import React from 'react';
import './Open-Requests.css'
import {Jumbotron, Label} from "react-bootstrap";

export class OpenRequests extends React.Component {

    render() {
        const {openRequests} = this.props;
        let requests = openRequests.map((curr, index) => {
            return (<span className='OpenRequest' key={index}>
                <Jumbotron>
                    <h1>vacation request</h1>
                    <p>status: <Label>{curr.vacationRequestStatus}</Label></p>
                    <p>requested: <Label>{curr.requested}</Label></p>
                    <p>days: <Label>{curr.vacations.length}</Label></p>
                </Jumbotron>
                </span>);
        });

        return (<div className='OpenRequests'>
            {requests}
        </div>);
    }
}
