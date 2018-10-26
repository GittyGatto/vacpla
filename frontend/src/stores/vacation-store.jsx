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
        this.data.vacationDays = this._transformToDate(ev.data.vacationDays);
        this.data.vacationYears = this._getVacationYears();
    }

    appendDataTo(data) {
        data.vacation = this.data;
    }

    _getVacationYears() {
        const vacationDays = this.data.vacationDays;
        let years = [];
        vacationDays.forEach(a => {
            const year = a.getFullYear();
            years.push(year);
        })
        let result = years.filter( this._onlyUnique );
        return result;
    }

    _onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    _transformToDate(sourceArray) {
        let result = [];
        sourceArray.forEach(a => {
            const date = new Date(a);
            result.push(date);
        });
        return result;
    }
}

const vacationStore = new VacationStore();

export default vacationStore;
