import holidayStore from "./holiday-store";
import {getDaysByStatus, getFilteredRequestsByStatus} from "../ui-components/Utils/vacation-request-service";
import datesBetween from "dates-between";
import {giveVacationDays} from "../ui-components/Utils/vacation-service";

class ViewRequestStore {
    constructor() {
        this.data = {
            viewRequest: {},
            holidays: [],
            approved: [],
            requested: [],
            totalVacation: '',
        }
    }

    appendDataTo(data) {
        data.viewRequest = this.data;
    }

    handleLoadRequestSucceeded(ev) {
        this.data.viewRequest = ev.data.request;
        this.data.approved = this._getDaysAsDateByStatus(ev, 'APPROVED');
        this.data.requested = this._getDaysAsDateFromRequestedExceptCurrent(ev);
        this.data.totalVacation = ev.data.totalVacation;
        this.data.holidays = this._holidaysToCalendarDates();
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

    _getDaysAsDateByStatus(ev, searchStatus) {
        let requests = getFilteredRequestsByStatus(ev, searchStatus);
        let dates = [];
        requests.forEach(request => {
                const startDay = request.vacations[0].from;
                const endDay = request.vacations[0].to;
                let range = Array.from(datesBetween(new Date(startDay), new Date(endDay)));
                const vacationDays = giveVacationDays(range);
                vacationDays.forEach(day =>{
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

    _getDaysAsDateFromRequestedExceptCurrent(ev) {
       const currentRequest = ev.data.request;
       const requests = this._getDaysAsDateByStatus(ev, 'REQUESTED');
       let result = requests.filter(request => {
           return (request.uuid === currentRequest.uuid)
       })

        return [];
    }
}

const viewRequestStore = new ViewRequestStore();

export default viewRequestStore;
