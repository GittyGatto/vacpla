class HolidayStore {
    constructor() {
        this.data = {
            holidays: [],
        };
    }

    loadHolidaysSucceeded(ev) {
        this.data.holidays = ev.data.holidays;
        console.log("wup wup: %o", this.data.holidays);
    }

    appendDataTo(data) {
        data.holidays = this.data;
    }
}

const holidayStore = new HolidayStore();

export default holidayStore;
