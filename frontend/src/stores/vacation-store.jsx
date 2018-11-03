class VacationStore {
    constructor() {
        this.data = {
            totalVacation: '',
            vacationDays: [],
            vacationYears: [],
        };
    }

    handleLoadVacationSucceeded(ev) {
        this.data.totalVacation = ev.data.totalVacation;
        console.log("continue here human")
    }

    appendDataTo(data) {
        data.vacation = this.data;
    }
}

const vacationStore = new VacationStore();

export default vacationStore;
