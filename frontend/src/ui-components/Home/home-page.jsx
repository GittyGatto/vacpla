import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import logout from '../../actions/logout-action';
import './Home-Page.css';
import {Button, Label} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import loadVacation from "../../actions/load-vacation-action";

export class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: props.isAuthenticated,
            getUser: props.getUser,
        };

        loadVacation(props.userName);

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

        return <div className='HomePage'>

            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">

                    <li><Link to="/">Homes</Link></li>
                    <li><Link to="/about">About</Link></li>

                </ul>
            </nav>

            <div className='HomePage_header'>
                <h2>Vacation planner</h2>

                <Button className="logout-button" bsSize='large'
                        onClick={() => logout()}>Logout</Button>
            </div>
        </div>;
    }
}
