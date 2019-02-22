import React from 'react';
import './status-bar.css';
import {Link} from "react-router-dom";
import {dispatcher} from "../../util/mini-flux";
import {setSidebarOpen} from "../../actions/show-sidebar-action";

export class StatusBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openRequests: [],
        };
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
        setSidebarOpen(false);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _onChange(ev) {
        const {openRequests} = ev.vacation;
        this.setState({openRequests});
    }

    render() {
        const {openRequests} = this.state;

        return <div className='container'>

            <Link to="/">
                <div className='StatusBar__item'>
                    <i className="fas fa-tachometer-alt"></i>
                    <p>Dashboard</p>
                </div>
            </Link>

            <Link to="/NewRequest">
                <div className='StatusBar__item'>
                    <i className="fas fa-cart-plus"></i>
                    <p>New</p>
                </div>
            </Link>

            <Link to="/MyOpenRequest">
                <div className='StatusBar__item'>
                    <i className="fas fa-envelope-open"></i>
                    <p>Open ({openRequests ? openRequests.length:'0'})</p>
                </div>
            </Link>

            <div className='StatusBar__item'>
                <i className="fas fa-thumbs-up"></i>
                <p>Approved</p>
            </div>

            <div className='StatusBar__item'>
                <i className="fas fa-thumbs-down"></i>
                <p>Declined</p>
            </div>

            <Link to="/OpenRequest">
                <div className='StatusBar__item'>
                    <i className="fas fa-glasses"></i>
                    <p>Need Approval</p>
                </div>
            </Link>

        </div>;
    }
}
