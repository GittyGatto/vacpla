import '../../../styles/index.scss';
import React from 'react';
import {dispatcher} from '../../util/mini-flux';
import logout from '../../actions/logout-action';
import './Home-Page.css';
import {Button, Label} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import loadVacation from "../../actions/load-vacation-action";
import {VacationYear} from "./vacation-year";

export class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            getUser: props.getUser,
            totalVacation: undefined,
            vacationDays: [],
            vacationYears: [],
        };
        loadVacation();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _onChange(ev) {
        const {getUser} = ev;
        const {totalVacation, vacationDays, vacationYears} = ev.vacation;
        this.setState({getUser, totalVacation, vacationDays, vacationYears});
    }

    render() {
        const {getUser, totalVacation, vacationDays, vacationYears} = this.state;

        return <div className='HomePage'>

            <div className='HomePage_header'>
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                        <li><Link to="/">Homes</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
                <Button className="logout-button" bsSize='large'
                        onClick={() => logout()}>Logout</Button>
                <h3>Vacation planner</h3>
            </div>

            <div className="HomePage_dashboard">
                <p>Hi {getUser ? getUser.userName : 'human'}</p>
                <p>Vacation total: <Label>{totalVacation ? totalVacation : 'loading...'}</Label></p>
                <p>Planned: <Label>{vacationDays.length ? vacationDays.length : 'loading...'}</Label></p>
                <p>Rest: <Label>{totalVacation-vacationDays.length ? totalVacation-vacationDays.length : 'loading...'}</Label></p>
                <VacationYear vacationYears={this.state.vacationYears} />

            </div>


        </div>;
    }
}
