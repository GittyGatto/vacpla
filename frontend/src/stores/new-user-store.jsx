class NewUserStore {
    constructor() {
        this.data = {
            newUserName: '',
            newPassword: '',
            entry: '',
            role: '',
            initLeave: '',
            roles: undefined,
            submitDisabled: false,
        };
    }

    appendDataTo(data) {
        data.newUser = this.data;
    }

    handleNewUserFieldChanged(action) {
        const {field, value} = action.data;
        this.data[field] = value;
        this.data.submitDisabled = this._getButtonDisabledStatus();
    }

    handleLoadRolesSucceeded(ev) {
        this.data.roles = this._buildOptions(ev.data);
    }

    handleRoleChanged(ev) {
        this.data.role = ev.data.role;
        this.data.submitDisabled = this._getButtonDisabledStatus();
    }

    _buildOptions(options) {
        return options.map(option => {
            return {value: option, label: option}
        });
    }

    _getButtonDisabledStatus() {
		if(this.data.newUserName !== '' &&
            this.data.newPassword !== '' &&
            this.data.entry !== '' &&
            this.data.role !== ''){
		    return true;
        }
		return false;
    }
}

const newUserStore = new NewUserStore();

export default newUserStore;
