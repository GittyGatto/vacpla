import '../../../styles/index.scss';
import React from 'react';
import '../Dashboard/Dashboard-Page.css';
import {Header} from "../Header/Header";
import Calendar from "react-calendar";
import {dispatcher} from "../../util/mini-flux";
import {Button, Col, Grid, Label, Row} from "react-bootstrap";
import changedCalender from "../../actions/change-calendar-action";

export class NewRequestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            range: [],
            requestedDays: undefined,
            date: [new Date(), new Date()],
            minDate: new Date(),
            getUser: props.getUser,
            vacationLeftCount : undefined,
        };
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
        const {range, requestedDays} = ev.newRequest;
        const {vacationLeftCount}= ev.vacation;
        this.setState({getUser, range, requestedDays, vacationLeftCount});
    }

    render() {
        const {getUser, date, minDate, range, requestedDays, vacationLeftCount} = this.state;
        return <div className='DashboardPage'>
            <Header getUser={getUser}/>
            <Grid className='DashboardPage__Overview'>
                <Row className="show-grid">
                    <Col xs={12}>
                        <h1>New Request</h1>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={6} className='NewRequest__Calender'>
                        <Calendar locale='de'
                                  minDate={minDate}
                                  returnValue='range'
                                  selectRange={true}
                                  value={date}
                                  onChange={(ev) => this._onCalendarChanged(ev)}/>
                    </Col>
                    <Col xs={6} className='NewRequest__Status'>

                        <Button bsStyle="success">Request</Button>
                        <Button bsStyle="danger">Clear</Button>


                        <Row className="show-grid">
                            <Col xs={6} className='LeftCol'>
                                <p>From: </p>
                            </Col>
                            <Col xs={6} className='RightCol'>
                                <Label>{range[0]}</Label>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col xs={6} className='LeftCol'>
                                <p>To: </p>
                            </Col>
                            <Col xs={6} className='RightCol'>
                                <Label>{range[1]}</Label>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col xs={6} className='LeftCol'>
                                <p>Requested: </p>
                            </Col>
                            <Col xs={6} className='RightCol'>
                                <Label>{requestedDays}</Label>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col xs={6} className='LeftCol'>
                                <p>Days left: </p>
                            </Col>
                            <Col xs={6} className='RightCol'>
                                <Label>{vacationLeftCount-requestedDays}</Label>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Grid>
        </div>;
    }

    _onCalendarChanged(ev) {
        changedCalender(ev);
    }
}
