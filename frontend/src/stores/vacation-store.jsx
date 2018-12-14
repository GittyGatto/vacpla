import {getAllRequests, getVacationRequests} from '../ui-components/Utils/vacation-request-service';

class VacationStore {
    constructor() {
        this.data = {
            totalVacation: '',
            vacationLeftCount: '',
            openRequestDaysCount: undefined,
            requests: [],
        };
    }

    handleLoadVacationSucceeded(ev) {
        this.data.totalVacation = ev.data.totalVacation;
        this.data.vacationLeftCount = this._getVacationLeftCount(ev);
        this.data.openRequestDaysCount = this._getOpenRequestDaysCount(ev);
        this.data.requests = getAllRequests(ev);
    }

    appendDataTo(data) {
        data.vacation = this.data;
    }

    _getVacationLeftCount(ev) {
        let approvedRequests = this._getFilteredRequests(ev, 'APPROVED')
        let approvedDays = this._getVacationDays(approvedRequests);
        let taken = this._getVacationDayCount(approvedDays);
        const total = ev.data.totalVacation;
        return total - taken;
    }

    _getOpenRequestDaysCount(ev) {
        const requestedRequests = this._getFilteredRequests(ev, 'REQUESTED');
        let requestedDays = this._getVacationDays(requestedRequests);
        return this._getVacationDayCount(requestedDays);
    }

    _getFilteredRequests(ev, searchString) {
        const requests = getVacationRequests(ev);
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
