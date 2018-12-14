import '../../../styles/index.scss';
import React from 'react';
import './Header-Page.css'
import {dispatcher} from '../../util/mini-flux';
import {Link} from "react-router-dom";
import logout from '../../actions/logout-action';
import {slide as Menu} from 'react-burger-menu'
import {setSidebarOpen} from "../../actions/show-sidebar-action";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: null,
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange(ev) {
        const {showSidebar} = ev;
        this.setState({showSidebar});
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    handleStateChange(state) {
        if (state.isOpen === this.state.showSidebar) {
            return null;
        }
        setSidebarOpen(state.isOpen);
    }

    render() {
        const {showSidebar} = this.state;

        return <div className='HeaderPage'>
            <Menu pageWrapId={'page-wrap'}
                  outerContainerId={'outer-container'}
                  onStateChange={(state) => this.handleStateChange(state)}
                  isOpen={showSidebar}>

                <a className="menu-item sideBarItem">
                    <Link to="/">Dashboard</Link>
                </a>

                <span className="menu-item sideBarItem">
                    <Link to="/NewRequest">New Request</Link>
                </span>

                <a className="menu-item sideBarItem">
                    <Link to="/OpenRequest">Open Requests</Link>
                </a>

                <a className="menu-item sideBarItem" onClick={() => logout()}>
                    Logout
                </a>
            </Menu>
        </div>
    }
}
