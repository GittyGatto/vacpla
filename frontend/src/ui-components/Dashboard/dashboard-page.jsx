import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import './Dashboard-Page.css';
import {Col, Grid, Label, Row} from 'react-bootstrap';
import loadVacation from "../../actions/load-vacation-action";
import {VacationYear} from "./vacation-year";
import {VacationMonth} from "./vacation-month";
import {Header} from "../Header/Header";

export class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getUser: props.getUser,
            totalVacation: undefined,
            vacationDays: [],
            vacationYears: [],
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
        const {totalVacation, vacationDays, vacationYears} = ev.vacation;
        this.setState({getUser, totalVacation, vacationDays, vacationYears});
    }

    render() {
        const {getUser, totalVacation, vacationDays, vacationYears} = this.state;
        return <div className='DashboardPage'>
            <Header getUser={getUser}/>

            <Grid className='DashboardPage__Overview'>
                <Row className="show-grid">
                    <Col md={6} className='LeftCol'>
                        <p>Vacation total: </p>
                    </Col>
                    <Col md={6} className='RightCol'>
                        <Label>{totalVacation ? totalVacation : '...'}</Label>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6} className='LeftCol'>
                        <p>Planned: </p>
                    </Col>
                    <Col md={6} className='RightCol'>
                        <Label>{vacationDays.length ? vacationDays.length : '...'}</Label>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={6} className='LeftCol'>
                        <p>Rest: </p>
                    </Col>
                    <Col md={6} className='RightCol'>
                        <Label>{totalVacation - vacationDays.length ? totalVacation - vacationDays.length : '...'}</Label>
                    </Col>
                </Row>
            </Grid>
        </div>;
    }
}
