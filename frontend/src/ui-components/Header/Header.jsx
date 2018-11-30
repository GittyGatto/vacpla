import '../../../styles/index.scss';
import React from 'react';
import './Header-Page.css'
import {dispatcher} from '../../util/mini-flux';
import {Link} from "react-router-dom";
import logout from '../../actions/logout-action';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {slide as Menu} from 'react-burger-menu'
import {setSidebarOpen} from "../../actions/show-sidebar-action";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: null,
            getUser: undefined,
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange(ev) {
        const {getUser, showSidebar} = ev;
        this.setState({getUser, showSidebar});
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
        const {getUser, showSidebar} = this.state;

        return <div className='HeaderPage'>

            <div className='navItem'>
                <a className="fas fa-bars"
                   onClick={() => {setSidebarOpen(true)}}>
                </a>
            </div>
            <Menu pageWrapId={'page-wrap'}
                  outerContainerId={'outer-container'}
                  onStateChange={(state) => this.handleStateChange(state)}
                  isOpen={showSidebar}>
                <ListGroup>
                    <ListGroupItem className={'sidebarHeader'}><Link to="/">Dashboard</Link></ListGroupItem>
                    <ListGroupItem className={'sidebarHeader'}><Link to="/about">New Request</Link></ListGroupItem>
                    <ListGroupItem className={'sidebarHeader'} onClick={() => logout()}>Logout</ListGroupItem>
                </ListGroup>
            </Menu>
            <p className='LoginName'>Hi {getUser ? getUser.userName : 'undefinedUser'}</p>
        </div>
    }
}
