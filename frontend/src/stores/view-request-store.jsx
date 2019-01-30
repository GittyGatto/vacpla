import holidayStore from "./holiday-store";

class ViewRequestStore {
    constructor() {
        this.data = {
            viewRequest: {},
            holidays: [],
        }
    }

    appendDataTo(data) {
        data.viewRequest = this.data;
    }

    handleLoadRequestSucceeded(ev) {
        this.data.viewRequest = ev.data.request;
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
}

const viewRequestStore = new ViewRequestStore();

export default viewRequestStore;
