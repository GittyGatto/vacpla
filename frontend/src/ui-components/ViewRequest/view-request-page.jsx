import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from "../../util/mini-flux";
import loadRequest from "../../actions/load-request-action";


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

    _renderPageContent() {
        const {uuid} = this.props.match.params;
        const {viewRequest} = this.state;

        if (!uuid) {
            return <h1>No request selected.</h1>;
        }

        return (<div>
            <h1>my little request</h1>
            <p>{uuid}</p>
            <h1>owner: {viewRequest.owner ? viewRequest.owner : '...'}</h1>
        </div>);
    }

    render() {
        return (<div>
            {this._renderPageContent()}
        </div>);
    }
}

