import React from 'react';
import './status-bar.css';
import {Link} from "react-router-dom";

export class StatusBar extends React.Component {
    render() {
        return <div className='container'>

            <Link to="/">
            <div className='StatusBar__item'>
                <i className="fas fa-tachometer-alt"></i>
                <p>dashboard</p>
            </div>
            </Link>

            <Link to="/NewRequest">
            <div className='StatusBar__item'>
                <i className="fas fa-cart-plus"></i>
                <p>new</p>
            </div>
            </Link>

            <div className='StatusBar__item'>
                <i className="fas fa-envelope-open"></i>
                <p>open</p>
            </div>

            <div className='StatusBar__item'>
                <i className="fas fa-thumbs-up"></i>
                <p>approved</p>
            </div>

            <div className='StatusBar__item'>
                <i className="fas fa-thumbs-down"></i>
                <p>declined</p>
            </div>

            <Link to="/OpenRequest">
            <div className='StatusBar__item'>
                <i className="fas fa-glasses"></i>
                <p>need approval</p>
            </div>
            </Link>

        </div>;
    }
}
