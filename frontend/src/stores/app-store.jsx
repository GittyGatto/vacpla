const LocalStorage = window.localStorage;
const AUTH_DATA_KEY = "authenticationData";

class AppStore {
	constructor() {
		this.message = undefined;
		this.messageType = undefined;
		this.data = {
		    totalVacation : 5
        }
	}

        isAuthenticated() {
		const user = this.getUser();
		return !!user;
	}

	getUser() {
		const authenticationDataValue = LocalStorage.getItem(AUTH_DATA_KEY)
		if (!authenticationDataValue || authenticationDataValue === null)
			return null;

		const authenticationData = JSON.parse(authenticationDataValue);
		return authenticationData.user;
	}

	handleAuthenticationSucceeded(ev) {
		LocalStorage.setItem(AUTH_DATA_KEY, JSON.stringify({user: ev.user}));
	}

	handleAuthenticationFailed(ev) {
		LocalStorage.removeItem(AUTH_DATA_KEY);
	}

	handleLogoutSucceeded(ev) {
		LocalStorage.removeItem(AUTH_DATA_KEY);
	}

    handleAuthenticationFailed(ev) {
        this.setMessage('Login failed.', false);
        LocalStorage.removeItem(AUTH_DATA_KEY);
    }

    handleLogoutSucceeded(ev) {
        this.clearMessage();
        LocalStorage.removeItem(AUTH_DATA_KEY);
    }

    handleSetMessage(ev) {
        this.setMessage(ev.message, ev.messageType);
    }

    handleClearMessage(ev) {
        this.clearMessage();
    }

    clearMessage() {
        this.message = undefined;
        this.messageType = undefined;
    }

    handleMessageSet(action) {
        const {text, type} = action.data;
        this.setMessage(text, type);
    }

    setMessage(message, messageType) {
        this.message = message;
        this.messageType = messageType;
        if (!!message && messageType === 'success') {
            let self = this;
            setTimeout(function () {
                self.clearMessage();
            }, 1250);
        }
    }

    appendDataTo(data) {
		data.isAuthenticated = this.isAuthenticated();
		data.getUser = this.getUser();
	}
}

const appStore = new AppStore();

export default appStore;
