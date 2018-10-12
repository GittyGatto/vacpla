import React from 'react';
import {dispatcher} from "../util/mini-flux";
import login from '../actions/login-action';
import changeLoginField from '../actions/change-login-field-action';
import bgImage from '../assets/images/M8FaIr1.jpg';
import './LoginForm.css'
import {Button, FormControl, FormGroup, Label} from 'react-bootstrap';


export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {userName: '', password: '', message: ''};

        this._onChange = this._onChange.bind(this);
    }

    _onChange(ev) {
        const {userName, password, message, messageType} = ev.login;
        this.setState({userName, password, message, messageType});
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _handleChange(name, ev) {
        changeLoginField(name, ev.target.value)
    }

    _handleKeyUp(ev) {
        const {userName, password} = this.state;

        if (ev.key === 'Enter' && this._isLoginEnabled()) {
            login(userName, password);
        }
    }

    _onLoginClicked(ev) {
        const {userName, password} = this.state;
        login(userName, password);
    }

    _isLoginEnabled() {
        const {userName, password} = this.state;
        return !userName || !password;
    }

    render() {
        const {userName, password, message} = this.state;

        const formStyle = {backgroundImage: 'url("' + bgImage + '")'};

        return <div className='LoginForm atLoginForm' style={formStyle}>

            <div className='LoginForm_header'>
                <h2>Frankenstein Inc.</h2>
                <h3>Global Services</h3>
            </div>

            <form>
                <FormGroup>
                    <FormControl bsSize='large'
                                 placeholder="Username"
                                 value={userName}
                                 onChange={(ev) => this._handleChange('userName', ev)}/>
                </FormGroup>
                <FormGroup>
                    <FormControl bsSize='large'
                                 type='password'
                                 placeholder="Password"
                                 value={password}
                                 onChange={(ev) => this._handleChange('password', ev)}
                                 onKeyUp={(ev) => this._handleKeyUp(ev)}/>
                </FormGroup>
                <FormGroup>
                    <div className='LoginForm_message'><Label>{message}</Label></div>
                </FormGroup>
                <FormGroup>
                    <Button bsSize='large'
                            disabled={this._isLoginEnabled()}
                            onClick={(ev) => this._onLoginClicked(ev)}
                            color='default'>
                        Login
                    </Button>
                </FormGroup>
            </form>
        </div>;
    }
}
