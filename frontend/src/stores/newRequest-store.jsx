import {VacationRequestRange} from "../ui-components/NewRequest/vacation-request-range";
import uuidv4 from 'uuid/v4';
import datesBetween from "dates-between";
import {calculateVacationDays} from "../ui-components/Utils/vacation-service";
import moment from 'moment';


class NewRequestStore {
    constructor() {
        this.data = {
            uuid: undefined,
            selectedRange: [],
            requestedDays: undefined,
            requestedVacations: undefined,
        };
    }

    appendDataTo(data) {
        data.newRequest = this.data;
    }

    handleCalendarChanged(ev) {
        this.data.selectedRange = ev.data.range;
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
        const range = this.data.selectedRange;
        const vacDays = Array.from(datesBetween(new Date(range[0]), new Date(range[1])));
        return calculateVacationDays(vacDays);
    }

    _createRequest() {
        const request = new VacationRequestRange();
        const range = this.data.selectedRange;
        request.days = this.data.requestedDays;
        request.range = [range[0].toDate().toLocaleDateString(), range[1].toDate().toLocaleDateString()];
        request.uuid = uuidv4();
        this.data.uuid = request.uuid;
        return request;
    }

    _resetRequest() {
        this.data.uuid = undefined;
        this.data.selectedRange = undefined;
        this.data.requestedDays = undefined;
    }

    _resetData() {
        this._resetRequest();
        this.data.requestedVacations = undefined;
    }
}

const newRequestStore = new NewRequestStore();

export default newRequestStore;
