import {VacationRequestRange} from "../ui-components/NewRequest/vacation-request-range";

class NewRequestStore {
    constructor() {
        this.data = {
            range: [],
            requestedDays: undefined,
            requestedVacations: undefined,
        };
    }

    appendDataTo(data) {
        data.newRequest = this.data;
    }

    handleCalendarChanged(ev) {
        this.data.range = this._setRange(ev.data.range);
        this.data.requestedDays = this._getRequestedDays(ev.data.range);
    }

    handleVacationAdded(ev){
        this.data.requestedVacations = this._createRequest();
        this._resetRequest();
    }

    handleVacationDeleted(){
        this.data.requestedVacations = undefined;
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

    _createRequest() {
        const request = new VacationRequestRange();
        request.days = this.data.requestedDays;
        request.range = this.data.range;
        return request;
    }

    _resetRequest() {
        this.data.range = [];
        this.data.requestedDays = undefined;
    }
}

const newRequestStore = new NewRequestStore();

export default newRequestStore;
