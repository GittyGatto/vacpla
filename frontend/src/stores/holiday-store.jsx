class HolidayStore {
    constructor() {
        this.data = {
            holidays: [],
        };
    }

    handleLoadHolidaysSucceeded(ev) {
        this.data.holidays = this._extractHolidays(ev.data);
    }

    appendDataTo(data) {
        data.holidays = this.data;
    }

    _extractHolidays(holidays) {
        const result = [];
        holidays.forEach(curr => {
            result.push(curr.holiday);
        });
        return result;
    }
}

const holidayStore = new HolidayStore();

export default holidayStore;
