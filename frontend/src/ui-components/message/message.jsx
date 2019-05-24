import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import './message.css';

export class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            error: false,
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
        const {text, error} = ev.message;
        this.setState({text, error});
    }

    render() {
        const {text, error} = this.state;

        return <div className='Error_Message'>
            <p>{text}</p>
        </div>;
    }
}
