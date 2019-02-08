import {VacationRequestRange} from "../ui-components/NewRequest/vacation-request-range";
import uuidv4 from 'uuid/v4';
import datesBetween from "dates-between";
import {calculateVacationDays} from "../ui-components/Utils/vacation-service";

class NewRequestStore {
    constructor() {
        this.data = {
            uuid: undefined,
            range: [],
            requestedDays: undefined,
            requestedVacations: undefined,
            holidays: [],
        };
    }

    appendDataTo(data) {
        data.newRequest = this.data;
    }

    handleCalendarChanged(ev) {
        this.data.range = this._setRange(ev.data.range);
        this.data.requestedDays = this._getRequestedDays();
    }

    handleVacationAdded(ev) {
        this.data.requestedVacations = this._createRequest();
        this._resetRequest();
    }

    handleVacationDeleted(ev) {
        this.data.requestedVacations = undefined;
    }

    handleNewRequestPageResetted(ev) {
        this._resetData();
    }

    _setRange(range) {
        return [range[0].toLocaleDateString(), range[1].toLocaleDateString()];
    }

    _getRequestedDays() {
        const range = this.data.range;
        const vacDays = Array.from(datesBetween(new Date(range[0]), new Date(range[1])));
        return calculateVacationDays(vacDays);
    }

    _createRequest() {
        const request = new VacationRequestRange();
        request.days = this.data.requestedDays;
        request.range = this.data.range;
        request.uuid = uuidv4();
        this.data.uuid = request.uuid;
        return request;
    }

    _resetRequest() {
        this.data.uuid = undefined;
        this.data.range = [];
        this.data.requestedDays = undefined;
    }

    _resetData() {
        this._resetRequest();
        this.data.requestedVacations = undefined;
        this.data.holidays = [];
    }
}

const newRequestStore = new NewRequestStore();

export default newRequestStore;
