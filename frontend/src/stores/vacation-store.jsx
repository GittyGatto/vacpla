import {getFilteredRequestsByStatus, getVacationRequests} from '../services/vacation-request-service';
import moment from 'moment';
import holidayStore from "./holiday-store";
import datesBetween from "dates-between";
import {giveVacationDays} from "../services/vacation-service";
import {getCurrentAnnualLeave} from "../services/annual-leave-service";


class VacationStore {
    constructor() {
        this.data = {
            annualLeave: '',
            vacationLeftCount: '',
            openRequestDaysCount: undefined,
            requests: [],

            year: undefined,
            customCssClasses: undefined,

            openRequests: [],
            approvedRequests: [],
            declinedRequests: [],
        };
    }

    handleLoadVacationSucceeded(ev) {
        this.data.annualLeave = getCurrentAnnualLeave(ev);
        this.data.vacationLeftCount = this._getVacationLeftCount(ev);
        this.data.openRequestDaysCount = this._getOpenRequestDaysCount(ev);
        this.data.requests = getVacationRequests(ev);

        this.data.year = this._getYear();
        this.data.customCssClasses = this._getCustomCssClasses(ev);

        this.data.openRequests = getFilteredRequestsByStatus(ev, 'REQUESTED');
        this.data.approvedRequests = getFilteredRequestsByStatus(ev, 'APPROVED');
        this.data.declinedRequests = getFilteredRequestsByStatus(ev, 'NOT_APPROVED');
    }

    appendDataTo(data) {
        data.vacation = this.data;
    }

    _getVacationLeftCount(ev) {
        if (!ev.data.vacationRequests[(new Date()).getFullYear()]) {
            return getCurrentAnnualLeave(ev);
        }
        let approvedRequests = getFilteredRequestsByStatus(ev, 'APPROVED');
        let approvedDays = this._getVacationDays(approvedRequests);
        let taken = this._getVacationDayCount(approvedDays);
        const total = getCurrentAnnualLeave(ev);
        return total - taken;
    }

    _getOpenRequestDaysCount(ev) {
        if (!ev.data.vacationRequests[(new Date()).getFullYear()]) {
            return []
        }
        const requestedRequests = getFilteredRequestsByStatus(ev, 'REQUESTED');
        let requestedDays = this._getVacationDays(requestedRequests);
        return this._getVacationDayCount(requestedDays);
    }

    _getFilteredRequestsByStatus(ev, searchString) {
        const requests = getVacationRequests(ev);
        let approvedRequests = requests.filter(function (curr) {
            return (curr.vacationRequestStatus === searchString)
        });
        return approvedRequests;
    }

    _getVacationDays(requests) {
        let days = requests.map(function (curr) {
            return (curr)
        });
        return days;
    }

    _getVacationDayCount(vacationDays) {
        let count = 0;
        vacationDays.forEach(curr => {
            count += curr.vacationCount;
        });
        return count;
    }

    _getYear() {
        const today = moment();
        return today.year();
    }

    _getCustomCssClasses(ev) {
        const holidays = this._holidaysToCalendarDates();
        const weekend = 'Sat,Sun';
        if (!ev.data.vacationRequests[(new Date()).getFullYear()]) {
            return {holidays: holidays, weekend: weekend}
        }
        const approved = this._getCalendarDatesByStatus(ev, 'APPROVED');
        const requested = this._getCalendarDatesByStatus(ev, 'REQUESTED');
        return {holidays: holidays, weekend: weekend, spring: approved, winter: requested};
    }

    _holidaysToCalendarDates() {
        const holidays = holidayStore.data.holidays;
        if (holidays === undefined) {
            return [];
        }
        let result = [];
        holidays.forEach(holiday => {
            result.push(holiday);
        });
        return result;
    }

    _getCalendarDatesByStatus(ev, searchStatus) {
        let requests = getFilteredRequestsByStatus(ev, searchStatus);
        let dates = [];
        requests.forEach(request => {
                const startDay = request.from;
                const endDay = request.to;
                let range = Array.from(datesBetween(new Date(startDay), new Date(endDay)));
                const vacationDays = giveVacationDays(range);
                vacationDays.forEach(day => {
                    dates.push(this._formatDate(day));
                });
            }
        );
        return dates;
    }

    _formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }
}

const vacationStore = new VacationStore();

export default vacationStore;
