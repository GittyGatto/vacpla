class MessageStore {
    constructor() {
        this.data = {
            text: '',
            error: false,
        }
    }

    handleMessageSet(ev) {
        this.data.text = ev.data.text;
        this.data.error = ev.data.error;
    }

    handleClearMessage() {
        this.data.text = '';
        this.data.error = false;
    }

    appendDataTo(data) {
        data.message = this.data;
    }
}

const messageStore = new MessageStore();

export default messageStore;
