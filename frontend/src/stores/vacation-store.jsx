class VacationStore {
    constructor() {
        this.data = {
            totalVacation: '',
            vacationDays: [],
            vacationYears: [],
        };
    }

    handleLoadVacationSucceeded(ev){
        this.data.totalVacation = ev.data.totalVacation;
        this.data.vacationDays = ev.data.vacationDays;
        this.data.vacationYears = this._getVacationYears();
    }

    appendDataTo(data) {
        data.vacation = this.data;
    }

    _getVacationYears(){
        const vacationDays = this.data.vacationDays;
        let vacationYears = vacationDays.filter((v, i, a) => a.getFullYear().indexOf(v) === i);
        return vacationDays;

    }
}

const vacationStore = new VacationStore();

export default vacationStore;
