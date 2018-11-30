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
import burgerStore from "./stores/burger-store";

dispatcher.addStore(appStore);
dispatcher.addStore(loginStore);
dispatcher.addStore(vacationStore);
dispatcher.addStore(newRequestStore);
dispatcher.addStore(holidayStore);
dispatcher.addStore(burgerStore);

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
