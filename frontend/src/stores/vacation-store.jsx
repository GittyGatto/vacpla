class VacationStore {
    constructor() {
        this.data = {
            totalVacation: '',
            vacationLeft: '',
        };
    }

    handleLoadVacationSucceeded(ev) {
        this.data.totalVacation = ev.data.totalVacation;
        this.data.vacationLeft = this._getVacationLeft(ev);
        console.log("continue here human")
    }

    appendDataTo(data) {
        data.vacation = this.data;
    }

    _getVacationLeft(ev) {
        const currentYear = (new Date()).getFullYear();
        const requests = ev.data.vacationRequests[currentYear];
        let approvedRequests = requests.filter(function (curr) {
            return (curr.vacationRequestStatus === 'APPROVED')
        });
        let vacationDays = approvedRequests.map(function (curr) {
            return (curr.vacations)
        });

        const total = ev.data.totalVacation;
        let taken = vacationDays[0].length;
        return total - taken;
    }
}

const vacationStore = new VacationStore();

export default vacationStore;
