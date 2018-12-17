import '../../styles/index.scss';
import React from 'react';
import RestrictAccess from './restrict-access';
import {appHistory} from './appHistory';
import {Router, Route, Switch} from 'react-router-dom';
import {DashboardPage} from './Dashboard/dashboard-page';
import {NewRequestPage} from './NewRequest/newRequest-page'
import {OpenRequestPage} from "./OpenRequest/open-request-page";
import {ViewRequestPage} from "./ViewRequest/view-request-page";


export default class App extends React.Component {
    render() {
        return (<RestrictAccess>
            <Router history={appHistory}>
                <Switch>
                    <Route exact path="/" component={DashboardPage}/>
                    <Route path="/NewRequest" component={NewRequestPage}/>
                    <Route path="/OpenRequest" component={OpenRequestPage}/>
                    <Route path="/ViewRequest/:uuid" component={ViewRequestPage}/>
                </Switch>
            </Router>
        </RestrictAccess>);
    }
}
