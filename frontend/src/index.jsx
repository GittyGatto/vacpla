import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './ui-components/app';
import {dispatcher} from "./util/mini-flux";
import appStore from "./stores/app-store";
import loginStore from "./stores/login-store";
import loadVacation from "./actions/load-vacation-action";

dispatcher.addStore(appStore);
dispatcher.addStore(loginStore);

render(<AppContainer><App/></AppContainer>, document.querySelector("#app"));

(function () {
    const userName = appStore.getUser();
    if (userName) {
        dispatcher.dispatch({
            type: "authenticationSucceeded",
            user: userName
        });
    }

    loadVacation(appStore.getUser().userName);

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
