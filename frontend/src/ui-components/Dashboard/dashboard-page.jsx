import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import './Dashboard-Page.css';
import {Col, Grid, Label, Row} from 'react-bootstrap';
import loadVacation from "../../actions/load-vacation-action";
import {Header} from "../Header/Header";
import {AllRequests} from "./all-requests";

export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getUser: props.getUser,
            totalVacation: undefined,
            vacationLeftCount: undefined,
            openRequestsCount: undefined,
            requests: [],
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
        const {totalVacation, vacationLeftCount, openRequestsCount, requests} = ev.vacation;
        this.setState({getUser, totalVacation, vacationLeftCount, openRequestsCount, requests});
    }

    render() {
        const {getUser, totalVacation, vacationLeftCount, openRequestsCount, requests} = this.state;
        return <div className='DashboardPage'>
            <Header getUser={getUser}/>

            <Grid className='DashboardPage__Overview'>
                <Row className="show-grid">
                    <Col xs={12}>
                        <h1>Dashboard</h1>
                    </Col>
                </Row>
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
                        <Label>{vacationLeftCount ? vacationLeftCount : '...'}</Label>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6} className='LeftCol'>
                        <p>Gone forever:</p>
                    </Col>
                    <Col md={6} className='RightCol'>
                        <Label>{totalVacation - vacationLeftCount ? totalVacation - vacationLeftCount : '...'}</Label>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6} className='LeftCol'>
                        <p>Open Requests:</p>
                    </Col>
                    <Col md={6} className='RightCol'>
                        <Label bsStyle='warning'>{openRequestsCount ? openRequestsCount : '...'}</Label>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={12}>
                        <h1>All requests</h1>
                        <AllRequests requests={requests}/>
                    </Col>
                </Row>

            </Grid>
        </div>;
    }
}
