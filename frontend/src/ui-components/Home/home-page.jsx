import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import logout from '../../actions/logout-action';
import bgImage from '../../assets/images/cc0-desktop-backgrounds-fog-7919.jpg';
import './Home-Page.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: props.isAuthenticated,
            getUser: props.getUser,
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
        const {isAuthenticated, getUser} = ev;
        const newState = {
            isAuthenticated,
            getUser,
        };
        this.setState(newState);
    }

    render() {
        const {getUser} = this.state;
        const formStyle = {backgroundImage: 'url("' + bgImage + '")'};

        return <div className='HomePage' style={formStyle}>

            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">

                    <li><Link to="/">Homes</Link></li>
                    <li><Link to="/about">About</Link></li>

                </ul>
            </nav>

            <div className='HomePage_header'>
                <h2>Frankenstein Inc.</h2>
                <h3>hi {getUser ? getUser.userName : 'default user'}</h3>
                <h3>your role is {getUser ? getUser.role : 'default role'}</h3>

                <Button className="logout-button" bsSize='large'
                        onClick={() => logout()}>Logout</Button>
            </div>
        </div>;
    }
}
