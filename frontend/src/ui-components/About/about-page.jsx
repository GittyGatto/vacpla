import '../../../styles/index.scss';
import React from 'react';
import autumn from '../../assets/images/baume-blatter-bunt-33109.jpg';
import '../Home/Home-Page.css';
import {Link} from 'react-router-dom';

export class AboutPage extends React.Component {

    render() {

        const formStyle = {backgroundImage: 'url("' + autumn + '")'};

        return <div className='HomePage' style={formStyle}>

            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <div className='HomePage_header'>
                <h2>About stuff</h2>
            </div>
        </div>;
    }
}
