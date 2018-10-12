import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../util/mini-flux';
import autumn from "../assets/images/baume-blatter-bunt-33109.jpg";
import './Home/Home-Page.css';
import {Link} from "react-router-dom";

export class AboutPage extends React.Component {

    render() {
        const formStyle = {backgroundImage: 'url("' + autumn + '")'};

        return <div style={formStyle}>

            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Homes</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <div>
                <h2>About stuff</h2>
            </div>
        </div>;
    }
}
