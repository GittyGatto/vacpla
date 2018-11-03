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

            <Grid>
                <Row className="show-grid">
                    <Col md={6} mdPush={6}>
                        <code>{'<Col md={6} mdPush={6} />'}</code>
                    </Col>
                    <Col md={6} mdPull={6}>
                        <code>{'<Col md={6} mdPull={6} />'}</code>
                    </Col>
                </Row>
            </Grid>


            <div className="DashboardPage_dashboard">
                <p>Vacation total: <Label>{totalVacation ? totalVacation : 'loading...'}</Label></p>
                <p>Planned: <Label>{vacationDays.length ? vacationDays.length : 'loading...'}</Label></p>
                <p>Rest: <Label>{totalVacation - vacationDays.length ? totalVacation - vacationDays.length : 'loading...'}</Label>
                </p>
                <VacationYear vacationYears={vacationYears}
                              vacationDays={vacationDays}/>
                <VacationMonth vacationDays={vacationDays}/>
            </div>
        </div>;
    }
}
