class NewRequestStore {
    constructor() {
        this.data = {
            range: [],
            requestedDays: undefined,
        };
    }

    appendDataTo(data) {
        data.newRequest = this.data;
    }

    handleCalendarChanged(ev) {
        this.data.range = this._setRange(ev.data.range);
        this.data.requestedDays = this._getRequestedDays(ev.data.range);
    }

    _setRange(range) {
        return [range[0].toLocaleDateString(), range[1].toLocaleDateString()];
    }

    _getRequestedDays(range) {
        const fromDate = new Date(range[0]);
        const toDate = new Date(range[1]);
        let diff = new Date(toDate.getTime() - fromDate.getTime());
        return diff.getUTCDate();
    }
}

const newRequestStore = new NewRequestStore();

export default newRequestStore;
