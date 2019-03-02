class UserManagementStore {
    constructor() {
        this.data = {
            allUsers: [],
        };
    }

    appendDataTo(data) {
        data.userManagment = this.data;
    }

    handleLoadAllUsersSucceeded(ev){
        this.data.allUsers = ev.data;
    }

}

const userManagementStore = new UserManagementStore();

export default userManagementStore;
