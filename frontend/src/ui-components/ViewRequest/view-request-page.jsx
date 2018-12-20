import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from "../../util/mini-flux";
import loadRequest from "../../actions/load-request-action";
import './ViewRequest-Page.css';
import {Header} from "../Header/Header";


export class ViewRequestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            <p>owner: {viewRequest.owner ? viewRequest.owner : '...'}</p>
            <p>from: {viewRequest.vacations ? viewRequest.vacations[0].from : '...'}</p>
            <p>to: {viewRequest.vacations ? viewRequest.vacations[0].to : '...'}</p>
            <p>days: {viewRequest.vacations ? viewRequest.vacations[0].vacationCount : '...'}</p>
        </div>);
    }

    render() {
        return (<div className='ViewRequestPage'>
            <Header/>
            <h1>Request</h1>
            {this._renderRequest()}
        </div>);
    }
}

