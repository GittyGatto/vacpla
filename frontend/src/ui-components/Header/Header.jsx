import '../../../styles/index.scss';
import React from 'react';
import './Header-Page.css'
import {Link} from "react-router-dom";
import logout from '../../actions/logout-action';
import {Button} from "react-bootstrap";

export class Header extends React.Component {
    render() {
        const {getUser} = this.props;
        return <div className='HeaderPage'>
            <h1>vac pla</h1>
            <h4>vacation as a service</h4>
            <nav className="NavMenu navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li><Link to="/">dashboard</Link></li>
                    <li><Link to="/about">new request</Link></li>
                </ul>
            </nav>
            <p className='LoginName'>Hi {getUser ? getUser.userName : 'undefinedUser'}</p>
            <Button className="LogoutButton" bsSize='large'
                    onClick={() => logout()}>Logout</Button>
        </div>;
    }
}
