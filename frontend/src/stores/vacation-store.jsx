class VacationStore {
    constructor() {
        this.data = {
            totalVacation: '',
            vacationLeftCount: '',
            openRequestsCount: undefined,
            requests: [],
        };
    }

    handleLoadVacationSucceeded(ev) {
        this.data.totalVacation = ev.data.totalVacation;
        this.data.vacationLeftCount = this._getVacationLeftCount(ev);
        this.data.openRequestsCount = this._getOpenRequestsCount(ev);
        this.data.requests = this._getAllRequests(ev);
        console.log("continue here human")
    }

    appendDataTo(data) {
        data.vacation = this.data;
    }

    _getVacationLeftCount(ev) {
        let approvedRequests = this._getFilteredRequests(ev, 'APPROVED')
        let vacationDays = this._getVacationDays(approvedRequests);
        let taken = this._getVacationDayCount(vacationDays);
        const total = ev.data.totalVacation;
        return total - taken;
    }

    _getOpenRequestsCount(ev) {
        const requests = this._getFilteredRequests(ev, 'REQUESTED');
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

    _getVacationDays(requests) {
        let days = requests.map(function (curr) {
            return (curr.vacations)
        });
        return days;
    }

    _getAllRequests(ev) {
        return this._getVacationRequests(ev);
    }

    _getVacationDayCount(vacationDays) {
        let count = 0;
        vacationDays.forEach(curr => {
            count += curr[0].vacationCount;
        });
        return count;
    }
}

const vacationStore = new VacationStore();

export default vacationStore;
