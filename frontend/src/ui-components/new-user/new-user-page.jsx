import React from 'react';
import './new-user-page.css';
import {dispatcher} from "../../util/mini-flux";
import {Button, FormControl, FormGroup} from "react-bootstrap";
import {ActionBar} from "../action-bar/action-bar";
import changeNewUserField from "../../actions/change-new-user-field-action";
import Select from 'react-select';
import changeRole from "../../actions/change-role-action";
import loadRoles from "../../actions/load-roles-action";
import saveNewUser from "../../actions/save-new-user-action";

export class NewUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUserName: '',
            newPassword: '',
            entry: '',
            role: '',
            initLeave: '',
            roles: undefined,
            selectedOption: null,
            submitDisabled: true,
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange(ev) {
        const {newUserName, newPassword, entry, role, initLeave, roles, submitDisabled} = ev.newUser;
        this.setState({newUserName, newPassword, entry, role, initLeave, roles, submitDisabled});
    }

    componentDidMount() {
        loadRoles();
        dispatcher.subscribe(this._onChange);
    }

    componentWillUnmount() {
        dispatcher.unsubscribe(this._onChange);
    }

    _handleChange(name, ev) {
        changeNewUserField(name, ev.target.value)
    }

    _handleSelectChange = selectedOption => {
        this.setState({selectedOption});
        changeRole(selectedOption);
    };

    _handleSubmitClicked(){
        saveNewUser();
    }

    render() {
        const {newUserName, newPassword, entry, role, initLeave, roles, selectedOption, submitDisabled} = this.state;

        return <div className='New_User_Page'>

            <ActionBar/>

            <div className='New_User_Page_Title'>
                <h2>Create User</h2>
            </div>

            <form>
                <FormGroup>
                    <FormControl placeholder='Username'
                                 value={newUserName}
                                 onChange={(ev) => this._handleChange('newUserName', ev)}/>
                </FormGroup>
                <FormGroup>
                    <FormControl type='password'
                                 placeholder='Password'
                                 value={newPassword}
                                 onChange={(ev) => this._handleChange('newPassword', ev)}/>
                </FormGroup>
                <FormGroup>
                    <FormControl type='date'
                                 placeholder="dd/mm/yyyy"
                                 value={entry}
                                 onChange={(ev) => this._handleChange('entry', ev)}/>
                </FormGroup>
                <FormGroup>
                    <FormControl type='number'
                                 placeholder="initLeave"
                                 value={initLeave}
                                 onChange={(ev) => this._handleChange('initLeave', ev)}/>
                </FormGroup>
                <FormGroup>
                    <Select placeholder='select role'
                        value={selectedOption}
                        onChange={this._handleSelectChange}
                        options={roles}
                    />
                </FormGroup>
                <FormGroup>
                    <Button onClick={() => this._handleSubmitClicked()}
                            disabled={!submitDisabled}
                            bsStyle="danger">Create User</Button>
                </FormGroup>
            </form>


        </div>;
    }
}
