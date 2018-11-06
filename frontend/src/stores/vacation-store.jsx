class VacationStore {
    constructor() {
        this.data = {
            totalVacation: '',
            vacationLeft: '',
            openRequests: undefined,
        };
    }

    handleLoadVacationSucceeded(ev) {
        this.data.totalVacation = ev.data.totalVacation;
        this.data.vacationLeft = this._getVacationLeft(ev);
        this.data.openRequests = this._getOpenRequests(ev);
        console.log("continue here human")
    }

    appendDataTo(data) {
        data.vacation = this.data;
    }

    _getVacationLeft(ev) {
        let approvedRequests = this._getFilteredRequests(ev, 'APPROVED')
        let vacationDays = this._getVacationDays(approvedRequests);
        let taken = vacationDays[0].length;
        const total = ev.data.totalVacation;
        return total - taken;
    }

    _getOpenRequests(ev) {
        const requests = this._getFilteredRequests(ev, 'NOT_APPROVED');
        return requests.length;
    }

    _getVacationRequests(ev) {
        const currentYear = (new Date()).getFullYear();
        const requests = ev.data.vacationRequests[currentYear];
        return requests;
    }

    _getFilteredRequests(ev, searchString) {
        const requests = this._getVacationRequests(ev);
        let approvedRequests = requests.filter(function (curr) {
            return (curr.vacationRequestStatus === searchString)
        });
        return approvedRequests;
    }

    _getVacationDays(requests){
        let days = requests.map(function (curr) {
            return (curr.vacations)
        });
        return days;
    }
}

const vacationStore = new VacationStore();

export default vacationStore;
