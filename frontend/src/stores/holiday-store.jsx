class HolidayStore {
    constructor() {
        this.data = {
            holidays: [],
        };
    }

    handleLoadHolidaysSucceeded(ev) {
        this.data.holidays = this._transformDates(ev.data);
    }

    appendDataTo(data) {
        data.holidays = this.data;
    }

    _transformDates(holidays) {
        const result = [];
        holidays.forEach(curr => {
            result.push(new Date(curr.holiday).toDateString());
        });
        return result;
    }
}

const holidayStore = new HolidayStore();

export default holidayStore;
