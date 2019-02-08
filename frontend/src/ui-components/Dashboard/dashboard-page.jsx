import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import './Dashboard-Page.css';
import {Badge, Button, Col, Grid, Label, Row} from 'react-bootstrap';
import loadVacation from "../../actions/load-vacation-action";
import {Header} from "../Header/Header";
import {AllRequests} from "./all-requests";
import {Link} from "react-router-dom";
import loadHolidays from "../../actions/load-holidays-action";
import {setSidebarOpen} from "../../actions/show-sidebar-action";

export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getUser: props.getUser,
            totalVacation: undefined,
            vacationLeftCount: undefined,
            openRequestDaysCount: undefined,
            requests: [],
        };
        loadVacation();
        loadHolidays();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
        setSidebarOpen(false);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _onChange(ev) {
        const {getUser} = ev;
        const {totalVacation, vacationLeftCount, openRequestDaysCount, requests} = ev.vacation;
        this.setState({getUser, totalVacation, vacationLeftCount, openRequestDaysCount, requests});
    }

    render() {
        const {getUser, totalVacation, vacationLeftCount, openRequestDaysCount, requests} = this.state;
        return <div className='DashboardPage'>
            <Header/>

            <Grid className='DashboardPage__Overview'>
                <Row className="show-grid">
                    <Col xs={12}>
                        <h1>{getUser ? getUser.userName : '...'}'s Dashboard</h1>
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
                        <p>Taken:</p>
                    </Col>
                    <Col md={6} className='RightCol'>
                        <Label>{totalVacation - vacationLeftCount ? totalVacation - vacationLeftCount : '...'}</Label>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6} className='LeftCol'>
                        <p>Requested:</p>
                    </Col>
                    <Col md={6} className='RightCol'>
                        <Label bsStyle='warning'>{openRequestDaysCount ? openRequestDaysCount : '...'}</Label>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={12}>
                        <Link to="/NewRequest"><Button bsStyle='danger'>NEW REQUEST!</Button></Link>
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
