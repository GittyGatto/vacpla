import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from "../../util/mini-flux";
import loadRequest from "../../actions/load-request-action";
import './ViewRequest-Page.css';
import {Header} from "../Header/Header";
import {Button} from "react-bootstrap";
import {Calendar} from 'react-yearly-calendar';
import moment from 'moment';
import approveRequest from "../../actions/approve-request-action";
import declineRequest from "../../actions/decline-request-action";


export class ViewRequestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uuid: undefined,
            viewRequest: {},
            holidays: [],
        };
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        const {uuid} = this.props.match.params;
        loadRequest(uuid);
    }

    _onChange(ev) {
        const {viewRequest, holidays} = ev.viewRequest;
        this.setState({viewRequest, holidays});
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _renderRequest() {
        const {viewRequest} = this.state;

        if (!viewRequest) {
            return <h1>No request selected.</h1>;
        }

        return (<div>
            <h1>{viewRequest.uuid ? viewRequest.uuid : '...'}</h1>
            <p>owner: {viewRequest.owner ? viewRequest.owner : '...'} </p>
            <p>from: {viewRequest.vacations ? viewRequest.vacations[0].from : '...'}</p>
            <p>to: {viewRequest.vacations ? viewRequest.vacations[0].to : '...'}</p>
            <p>days: {viewRequest.vacations ? viewRequest.vacations[0].vacationCount : '...'}</p>
        </div>);
    }

    render() {
        const {viewRequest, holidays} = this.state;

        const today = moment();
        const year = today.year();
        const fromMoment = moment(viewRequest.vacations ? viewRequest.vacations[0].from : null);
        const toMoment = moment(viewRequest.vacations ? viewRequest.vacations[0].to : null);
        const selectedRange = [fromMoment, toMoment];
        const customCssClasses = {holidays: holidays, weekend: 'Sat,Sun'};

        return (<div className='ViewRequestPage'>
            <Header/>
            <h1>Request ({viewRequest.requested ? viewRequest.requested : '...'})</h1>
            {this._renderRequest()}

            <Button className='ViewRequestPage__ActionButton' bsStyle='success'
                    onClick={(ev) => this._onApproveClicked(ev)}>Approve</Button>
            <Button className='ViewRequestPage__ActionButton' bsStyle='danger'
                    onClick={(ev) => this._onDeclineClicked(ev)}>Decline</Button>

            <div className='ViewRequestPage__YearOverview'>
                <Calendar
                    year={year}
                    forceFullWeeks={true}
                    customClasses={customCssClasses}
                    selectRange={true}
                    selectedRange={selectedRange}/>
            </div>

        </div>);

    }

    _onApproveClicked(ev) {
        approveRequest(this.state.viewRequest.uuid);
    }

    _onDeclineClicked(ev) {
        declineRequest(this.state.viewRequest.uuid);
    }
}

