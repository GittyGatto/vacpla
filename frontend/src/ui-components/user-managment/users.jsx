import React from 'react';
import './user.css';
import {Table} from "react-bootstrap";
import {extractAnnualLeave} from "../../services/annual-leave-service";

export class Users extends React.Component {

    render() {
        return (<div>
            {this._renderUsers()}
        </div>);
    }

    _renderUsers() {
        const {users} = this.props;

        if (users === undefined) {
            return <p>Ups ... no user found.</p>
        }

        return (<Table striped bordered hover className='User_Table'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Annual Leave {(new Date()).getFullYear()}</th>
                <th>Entry</th>
                <th>Exit</th>
            </tr>
            </thead>
            <tbody>
            {users.length > 0 ? users.map((curr, index) => this._renderUser(curr, index)) : <p>Ups... no user found</p>}
            </tbody>
        </Table>);
    }

    _renderUser(user, index) {
        const userName = user.userName;
        const role = user.role;
        const totalVacation = extractAnnualLeave(user.annualLeaves);
        const entry = new Date(user.entry).toLocaleDateString();
        const exit = user.exit;

        return (
            <tr key={index}>
                <td>{userName}</td>
                <td>{role}</td>
                <td>{totalVacation}</td>
                <td>{entry}</td>
                <td>{exit ? exit : 'n/a'}</td>
            </tr>
        )
    }
}
