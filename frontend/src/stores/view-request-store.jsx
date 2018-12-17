
class ViewRequestStore {
    constructor() {
        this.data = {
            viewRequest: {},
        };
    }

    appendDataTo(data) {
        data.viewRequest = this.data;
    }

    handleLoadRequestSucceeded(ev) {
        this.data.viewRequest = ev.data.request;
    }
}

const viewRequestStore = new ViewRequestStore();

export default viewRequestStore;
