import holidayStore from "./holiday-store";

class ViewRequestStore {
    constructor() {
        this.data = {
            viewRequest: {},
        //    customCssClasses: { holidays: [], weekend: 'Sat,Sun'},
            holidays: [],
        }
    }

    appendDataTo(data) {
        data.viewRequest = this.data;
    }

    handleLoadRequestSucceeded(ev) {
        this.data.viewRequest = ev.data.request;
        this.data.holidays = this._holidaysToCalendarDates();
      //  this.data.viewcustomCssClasses = {holidays: holidays};
    }

    _holidaysToCalendarDates() {
        const holidays = holidayStore.data.holidays;
        if (holidays === undefined) {
            return [];
        }
        let result = [];
        holidays.forEach(holiday => {
            result.push(new Date(holiday).toISOString().split('T')[0]);
        });
        return result;
    }
}

const viewRequestStore = new ViewRequestStore();

export default viewRequestStore;
