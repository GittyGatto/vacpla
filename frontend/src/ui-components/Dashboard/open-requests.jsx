import '../../../styles/index.scss';
import React from 'react';
import {Button} from "react-bootstrap";

export class OpenRequests extends React.Component {

    render() {
        let result = this.props.openRequests.map((curr, index) => {
            return (<span key={index}>{curr.vacationRequestStatus}</span>);
        });
        return (<div>
            <Button>{result}</Button>
        </div>);
    }
}
