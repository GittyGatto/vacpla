import {getAllRequests} from "../ui-components/Utils/vacation-request-service";

class OpenRequestStore {
    constructor() {
        this.data = {
            openRequests: [],
        };
    }

    appendDataTo(data) {
        data.openRequests = this.data;
    }

    handleLoadOpenRequestsSucceeded(ev) {
        this.data.openRequests = getAllRequests(ev);
    }
}

const openRequestStore = new OpenRequestStore();

export default openRequestStore;
