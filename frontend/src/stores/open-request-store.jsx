import {getVacationRequests} from "../services/vacation-request-service";

class OpenRequestStore {
    constructor() {
        this.data = {
            openUserRequests: [],
        };
    }

    appendDataTo(data) {
        data.openUserRequests = this.data;
    }

    handleLoadOpenRequestsSucceeded(ev) {
        this.data.openUserRequests = getVacationRequests(ev);
    }
}

const openRequestStore = new OpenRequestStore();

export default openRequestStore;
