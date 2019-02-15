import {getFilteredRequestsByStatus, getVacationRequests} from '../ui-components/Utils/vacation-request-service';
import moment from 'moment';
import holidayStore from "./holiday-store";
import datesBetween from "dates-between";
import {giveVacationDays} from "../ui-components/Utils/vacation-service";


class VacationStore {
    constructor() {
        this.data = {
            totalVacation: '',
            vacationLeftCount: '',
            openRequestDaysCount: undefined,
            requests: [],

            year: undefined,
            customCssClasses: undefined,
        };
    }

    handleLoadVacationSucceeded(ev) {
        this.data.totalVacation = ev.data.totalVacation;
        this.data.vacationLeftCount = this._getVacationLeftCount(ev);
        this.data.openRequestDaysCount = this._getOpenRequestDaysCount(ev);
        this.data.requests = getVacationRequests(ev);

        this.data.year = this._getYear();
        this.data.customCssClasses = this._getCustomCssClasses(ev);
    }

    appendDataTo(data) {
        data.vacation = this.data;
    }

    _getVacationLeftCount(ev) {
        let approvedRequests = getFilteredRequestsByStatus(ev, 'APPROVED');
        let approvedDays = this._getVacationDays(approvedRequests);
        let taken = this._getVacationDayCount(approvedDays);
        const total = ev.data.totalVacation;
        return total - taken;
    }

    _getOpenRequestDaysCount(ev) {
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

    _getYear() {
        const today = moment();
        return today.year();
    }

    _getCustomCssClasses(ev) {
        const holidays = this._holidaysToCalendarDates();
        const approved = this._getCalendarDatesByStatus(ev, 'APPROVED');
        const requested = this._getCalendarDatesByStatus(ev, 'REQUESTED');
        const weekend = 'Sat,Sun';
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
                const startDay = request.vacations[0].from;
                const endDay = request.vacations[0].to;
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
