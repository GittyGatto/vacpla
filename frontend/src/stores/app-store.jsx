const LocalStorage = window.localStorage;
const AUTH_DATA_KEY = "authenticationData";

class AppStore {

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
        LocalStorage.removeItem(AUTH_DATA_KEY);
    }

    handleLogoutSucceeded(ev) {
        LocalStorage.removeItem(AUTH_DATA_KEY);
    }

    appendDataTo(data) {
        data.isAuthenticated = this.isAuthenticated();
        data.getUser = this.getUser();
    }
}

const appStore = new AppStore();

export default appStore;
