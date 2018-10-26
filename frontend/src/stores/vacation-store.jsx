class VacationStore {
    constructor() {
        this.data = {
            totalVacation: '',
            vacationDay: [],
        };
    }

    handleLoadVacationSucceeded(ev){
        this.data.vacationDays = ev.data.vacationDays;
        this.data.totalVacation = ev.data.totalVacation;
    }

    appendDataTo(data) {
        data.vacation = this.data;
    }
}

const vacationStore = new VacationStore();

export default vacationStore;
