import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './ui-components/app';
import {dispatcher} from "./util/mini-flux";
import appStore from "./stores/app-store";
import loginStore from "./stores/login-store";
import vacationStore from "./stores/vacation-store";
import newRequestStore from "./stores/newRequest-store";
import holidayStore from "./stores/holiday-store";
import openRequestStore from "./stores/open-request-store";
import viewRequestStore from "./stores/view-request-store";
import userManagementStore from "./stores/user-management-store";
import messageStore from "./stores/message-store";

dispatcher.addStore(appStore);
dispatcher.addStore(loginStore);
dispatcher.addStore(vacationStore);
dispatcher.addStore(newRequestStore);
dispatcher.addStore(holidayStore);
dispatcher.addStore(openRequestStore);
dispatcher.addStore(viewRequestStore);
dispatcher.addStore(userManagementStore);
dispatcher.addStore(messageStore);

render(<AppContainer><App/></AppContainer>, document.querySelector("#app"));

(function () {
    const userName = appStore.getUser();
    if (userName) {
        dispatcher.dispatch({
            type: "authenticationSucceeded",
            user: userName
        });
    }
})();


if (module && module.hot) {
    module.hot.accept('./ui-components/app.jsx', () => {
        const App = require('./ui-components/app.jsx').default;
        render(
            <AppContainer>
                <App/>
            </AppContainer>,
            document.querySelector("#app")
        );
    });
}
