import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import './Dashboard-Page.css';
import {Col, Grid, Label, Row} from 'react-bootstrap';
import loadVacation from "../../actions/load-vacation-action";
import {Header} from "../Header/Header";

export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getUser: props.getUser,
            totalVacation: undefined,
            vacationLeft: undefined,
            openRequests: undefined,
        };
        loadVacation();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _onChange(ev) {
        const {getUser} = ev;
        const {totalVacation, vacationLeft, openRequests} = ev.vacation;
        this.setState({getUser, totalVacation, vacationLeft, openRequests});
    }

    render() {
        const {getUser, totalVacation, vacationLeft, openRequests} = this.state;
        return <div className='DashboardPage'>
            <Header getUser={getUser}/>

            <Grid className='DashboardPage__Overview'>
                <Row className="show-grid">
                    <Col md={6} className='LeftCol'>
                        <p>Total:</p>
                    </Col>
                    <Col md={6} className='RightCol'>
                        <Label>{totalVacation ? totalVacation : '...'}</Label>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6} className='LeftCol'>
                        <p>Left:</p>
                    </Col>
                    <Col md={6} className='RightCol'>
                        <Label>{vacationLeft ? vacationLeft : '...'}</Label>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6} className='LeftCol'>
                        <p>Gone forever:</p>
                    </Col>
                    <Col md={6} className='RightCol'>
                        <Label>{totalVacation - vacationLeft ? totalVacation - vacationLeft : '...'}</Label>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6} className='LeftCol'>
                        <p>Open Requests:</p>
                    </Col>
                    <Col md={6} className='RightCol'>
                        <Label>{openRequests ? openRequests : '...'}</Label>
                    </Col>
                </Row>
            </Grid>
        </div>;
    }
}
