import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from "../../util/mini-flux";
import loadRequest from "../../actions/load-request-action";
import './ViewRequest-Page.css';
import {Header} from "../Header/Header";
import {Button} from "react-bootstrap";
import {Calendar} from 'react-yearly-calendar';
import moment from 'moment';


export class ViewRequestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uuid: undefined,
            viewRequest: {},
        };
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        const {uuid} = this.props.match.params;
        loadRequest(uuid);
    }

    _onChange(ev) {
        const {viewRequest} = ev.viewRequest;
        this.setState({viewRequest});
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
        const {viewRequest} = this.state;

        const today = moment();
        const year = today.year();
        const fromMoment = moment(viewRequest.vacations ? viewRequest.vacations[0].from : null);
        const toMoment =moment(viewRequest.vacations ? viewRequest.vacations[0].to: null);
        const selectedRange = [ fromMoment,toMoment];

        const customCSSclasses = {
            holidays: [
                '2019-04-25',
                '2019-05-01',
                '2019-06-02',
                '2019-08-15',
                '2019-11-01'
            ],
            weekend: 'Sat,Sun',
        }

        return (<div className='ViewRequestPage'>
            <Header/>
            <h1>Request ({viewRequest.requested ? viewRequest.requested : '...'})</h1>
            {this._renderRequest()}

            <Button bsStyle='success' onClick={(ev) => this._onApproveClicked(ev)}>Approve</Button>

            <div className='YearOverview'>
                <Calendar
                    year={year}
                    forceFullWeeks={true}
                    customClasses={customCSSclasses}
                    selectRange={true}
                    selectedRange={selectedRange}/>
            </div>

        </div>);

    }

    _onApproveClicked(ev) {
            approveRequest(this.state.uuid)
    }

    _onDatePicked() {

    }
}

