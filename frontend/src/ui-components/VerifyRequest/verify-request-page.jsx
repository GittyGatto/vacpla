import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from "../../util/mini-flux";


export class VerifyRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uuid: undefined,
            request: {},
        };
        this._onAppModelChanged = this._onAppModelChanged.bind(this);
    }

    componentWillMount() {
        const {uuid} = this.props.match.params;

    }

    _onAppModelChanged(ev) {
    }

    componentDidMount() {
        dispatcher.subscribe(this._onAppModelChanged);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onAppModelChanged);
    }

    _renderPageContent() {
        const request = this.state.request;
        const {uuid} = this.props.match.params;

        if (!uuid) {
            return <h1>No request selected.</h1>;
        }

        return (<div>
            <h1>my little request</h1>
            <p>{uuid}</p>
        </div>);
    }

    render() {
        return (<div>
            {this._renderPageContent()}
        </div>);
    }
}

