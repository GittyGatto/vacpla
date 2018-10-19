class VacationStore {
    constructor() {
        this.data = {
            totalVacation: '',
            vacationDates: [],
        };
    }

    handleLoginFieldChanged(action) {
        const {field, value} = action.data;
        this.data[field] = value;
        this.data.message = '';
    }

    handleLoadVacationSucceeded(ev) {
        this.data.password = '';
        this.data.message = '';
    }

    handleAuthenticationFailed() {
        this.data.message = "Login failed.";
    }

    appendDataTo(data) {
        data.login = this.data;
    }
}

const loginStore = new LoginStore();

export default loginStore;
