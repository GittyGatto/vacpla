import React from 'react';
import './user-management-page.css';
import {ActionBar} from "../action-bar/action-bar";
import {dispatcher} from "../../util/mini-flux";
import loadAllUsers from "../../actions/load-all-Users-action";
import {Users} from "./users";

export class UserManagement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
        }
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        dispatcher.subscribe(this._onChange);
        loadAllUsers();
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _onChange(ev) {
        const {allUsers} = ev.userManagment;
        this.setState({allUsers});
    }

    render() {

        const {allUsers} = this.state;

        return <div className='User_Management_Page'>

            <ActionBar/>

            <div className='User_Management_Page_Title'>
                <h2>User Management</h2>
            </div>


            <div className='User_Management_Page_UserList'>
                <Users users={allUsers}/>
            </div>

        </div>;
    }
}
